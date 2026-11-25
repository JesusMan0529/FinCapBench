(() => {
  "use strict";

  const data = window.BenchSnapshots;
  const content = window.BenchContent;
  const main = document.querySelector("main");
  const header = document.querySelector("#site-header");
  const footer = document.querySelector("#footer");
  const dialog = document.querySelector("#dialog");
  const toast = document.querySelector("#toast");
  const topButton = document.querySelector(".back-to-top");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const projectName = "FinCapBench";
  const authEnabled = document.querySelector('meta[name="fincapbench-auth"]')?.content === "enabled";
  const authBase = authEnabled && ["https:", "http:"].includes(location.protocol) ? new URL("api/auth/", document.baseURI) : null;
  const authOptions = { credentials: "same-origin", mode: "same-origin", cache: "no-store", redirect: "error" };
  const repository = "https://github.com/JesusMan0529/FinCapBench";
  const labels = { llm: "大语言模型", agent: "智能体", local: "FinCapBench v1.0" };
  const navItems = [
    ["home", "首页"],
    ["evaluation-list", "评测榜单"],
    ["dataset", "评测数据集", "/llm"],
    ["docs", "文档"],
    ["paybench", "CNFinPayBench"],
    ["arena", "智能体竞技场"],
  ];
  const paths = {
    github: '<path fill="currentColor" stroke="none" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.86c-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.1-1.46-1.1-1.46-.9-.61.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.9.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.67-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.86c.85 0 1.7.11 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.69 1.03 1.58 1.03 2.67 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="m9 15 1.5-4.5L15 9l-1.5 4.5L9 15Z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>',
    copy: '<rect x="8" y="8" width="12" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    chevron: '<path d="m7 10 5 5 5-5"/>',
    up: '<path d="m5 12 7-7 7 7M12 5v14"/>',
    heart: '<path d="M20.8 4.6a5.3 5.3 0 0 0-7.5 0L12 5.9l-1.3-1.3a5.3 5.3 0 1 0-7.5 7.5l1.3 1.3L12 21l7.5-7.6 1.3-1.3a5.3 5.3 0 0 0 0-7.5Z"/>',
    eye: '<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/>',
    flask: '<path d="M9 3h6m-5 0v6l-5 8a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-8V3M7.5 14h9"/>',
  };

  const glyph = (name) => `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`;
  const escape = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[char]);
  const number = (value) => new Intl.NumberFormat("zh-CN").format(value);
  const external = (url, text, css = "text-link") => `<a href="${escape(url)}" class="${css}" target="_blank" rel="noopener noreferrer">${text}</a>`;
  const copyButton = (id, title) => `<button type="button" class="icon-button" data-copy="${id}" aria-label="${title}" title="${title}">${glyph("copy")}</button>`;
  const refLink = (page, title = "查看参考站", css) => external(content.reference + page, title, css);
  const heading = (title) => `<div class="page-heading"><h1>${title}</h1></div>`;
  const codeBox = (id, code, format = "JSON", label = "复制代码") => `
    <div class="code-box"><div class="code-toolbar"><span>${format}</span>${copyButton(id, label)}</div>
      <pre><code id="${id}">${escape(code)}</code></pre>
    </div>`;
  const tags = (items) => `<div class="tags">${items.map((item) => `<span class="tag">${escape(item)}</span>`).join("")}</div>`;

  let activePage = "";
  let toastTimer;
  let revealObserver;
  let scrollSpy;
  let scrollPending = false;
  let rankingState;
  let datasetState;
  let stopHeroMotion;
  let studentId = null;
  let sessionRevision = 0;

  function readLocal(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(`xjtuse-bench:${key}`)) ?? fallback;
    } catch {
      return fallback;
    }
  }

  function writeLocal(key, value) {
    try {
      localStorage.setItem(`xjtuse-bench:${key}`, JSON.stringify(value));
    } catch {
      // The current interaction still works in sessions that block browser storage.
    }
  }

  function announce(message) {
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.hidden = false;
    toastTimer = setTimeout(() => { toast.hidden = true; }, 2400);
  }

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const lastFocus = document.activeElement;
      const field = document.createElement("textarea");
      field.value = text;
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.append(field);
      field.select();
      let copied = false;
      try {
        copied = document.execCommand("copy");
      } catch {
        copied = false;
      } finally {
        field.remove();
        lastFocus?.focus();
      }
      if (!copied) {
        announce("浏览器限制剪贴板访问，请手动选中复制。");
        return;
      }
    }
    announce("已复制");
  }

  function downloadJson(value, filename) {
    const url = URL.createObjectURL(new Blob([JSON.stringify(value, null, 2) + "\n"], { type: "application/json" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
  }

  function showDialog(title, body) {
    dialog.innerHTML = `<div class="modal-title"><h2 id="dialog-title">${title}</h2>
      <button type="button" class="icon-button" data-action="close-dialog" aria-label="关闭">${glyph("close")}</button>
      </div>${body}`;
    dialog.showModal();
  }

  function activeLink(isActive, value = "page") {
    return isActive ? ` aria-current="${value}"` : "";
  }

  function accountControl() {
    if (!studentId) return '<button type="button" class="login-link" data-action="login">登录</button>';
    const id = escape(studentId);
    return `<details class="account-menu">
      <summary class="login-link" title="${id}"><span>${id}</span> ${glyph("chevron")}</summary>
      <div class="join-options"><button type="button" data-action="logout">退出登录</button></div>
    </details>`;
  }

  function updateAccount(id) {
    studentId = id;
    header.querySelectorAll("[data-account]").forEach((slot) => {
      slot.innerHTML = accountControl();
    });
  }

  async function refreshSession() {
    if (!authBase) return;
    const revision = ++sessionRevision;
    let id = null;
    try {
      const response = await fetch(new URL("session", authBase), authOptions);
      if (response.ok) {
        const session = await response.json();
        if (typeof session.studentId === "string" && session.studentId.trim().length && session.studentId.length <= 64) {
          id = session.studentId.trim();
        }
      }
    } catch {
      // A missing or unavailable session endpoint leaves the visitor signed out.
    }
    if (revision === sessionRevision) updateAccount(id);
  }

  function startLogin() {
    if (authBase) {
      const login = new URL("login", authBase);
      login.searchParams.set("returnTo", location.hash.startsWith("#/") ? location.hash : "#/home");
      location.assign(login);
      return;
    }
    showDialog("西安交通大学统一身份认证", `
      <p>学校尚未为本站开通统一认证。开通后，登录会跳转到学校认证页面。</p>
      <div class="inline-actions">${external("https://nic.xjtu.edu.cn/wlfw/wlfw/tysfrzxtjr.htm", "学校认证接入说明", "button button-outline")}
        <button class="button button-primary" type="button" data-action="close-dialog">关闭</button></div>`);
  }

  async function logout(control) {
    if (!authBase || !studentId) return;
    control.disabled = true;
    ++sessionRevision;
    try {
      const response = await fetch(new URL("logout", authBase), { ...authOptions, method: "POST" });
      if (!response.ok && response.status !== 401) throw new Error("Logout failed");
      updateAccount(null);
      const slot = [...header.querySelectorAll("[data-account]")].find((item) => item.getClientRects().length);
      slot?.querySelector("button")?.focus();
      announce("已退出登录");
    } catch {
      announce("退出登录失败，请重试");
    } finally {
      control.disabled = false;
    }
  }

  function mountHeader(section) {
    const activeSection = { "dataset-detail": "dataset", oldList: "evaluation-list", join: "evaluation-list" }[section] || section;
    header.innerHTML = `<div class="wrap header-inner">
      <a class="brand" href="#/home" aria-label="XJTUSE ${projectName} 首页">
        <img class="brand-seal" src="assets/xjtu-seal.png" width="43" height="43" alt="">
        <span class="brand-type"><small>XJTUSE</small><strong>${projectName}</strong></span>
      </a>
      <nav class="nav" id="navigation" aria-label="主导航">
        ${navItems.map(([key, label, suffix = ""]) => `
          <a href="#/${key}${suffix}"${activeLink(key === activeSection)}>${label}${key === "arena" ? '<span class="nav-framework">框架</span>' : ""}</a>`).join("")}
        ${external("https://opencompass.org.cn/", "OpenCompass", "mobile-utility")}
        <div class="mobile-utility" data-account>${accountControl()}</div>
      </nav>
      <div class="header-actions">
        <div class="join-menu" id="join-menu">
          <button type="button" class="button button-light button-compact" data-action="join-menu" aria-expanded="false" aria-controls="join-options">
            加入评测 ${glyph("chevron")}
          </button>
          <div class="join-options" id="join-options" hidden>
            <a href="#/join/llm">大语言模型评测</a>
            <a href="#/join/agent">智能体评测</a>
            <a href="#/paybench/submission">支付大模型评测</a>
          </div>
        </div>
        <a href="https://opencompass.org.cn/" class="icon-button compass-link" target="_blank" rel="noopener noreferrer" aria-label="OpenCompass" title="OpenCompass">${glyph("compass")}</a>
        <a href="${repository}" class="icon-button github-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub 仓库" title="GitHub 仓库">${glyph("github")}</a>
        <div class="header-account" data-account>${accountControl()}</div>
        <button type="button" class="icon-button menu-toggle" data-action="menu" aria-controls="navigation" aria-expanded="false" aria-label="展开导航">${glyph("menu")}</button>
      </div>
    </div>`;

    const join = header.querySelector("#join-menu");
    join.addEventListener("pointerenter", (event) => {
      if (event.pointerType === "mouse") showJoin(true);
    });
    join.addEventListener("pointerleave", (event) => {
      if (event.pointerType === "mouse" && !join.contains(document.activeElement)) showJoin(false);
    });
  }

  function showJoin(open) {
    header.querySelector("#join-options").hidden = !open;
    header.querySelector('[data-action="join-menu"]').setAttribute("aria-expanded", open);
  }

  function mountFooter() {
    footer.innerHTML = `<div class="school-strip">
      ${external("https://www.xjtu.edu.cn/", '<img src="assets/xjtu-lockup.png" alt="西安交通大学" width="695" height="186">', "school-lockup")}
      </div>
      <div class="wrap footer-inner">
        <span>XJTUSE · ${projectName}</span>
        <nav class="footer-links" aria-label="页脚导航">
          <a href="#/home/contact">联系方式</a>
          ${external("https://opencompass.org.cn/policy", "平台服务协议", "")}
        </nav>
      </div>`;
  }

  function taxonomyBody(group, index) {
    const [title, detail, terms] = content.dimensions[group][index];
    return `<h3>${title}</h3><p>${detail}</p>${tags(terms)}
      <a class="text-link" href="#/dataset/${group}?group=${data.groups[group][index].id}">查看相关数据集</a>`;
  }

  function taxonomy(group) {
    return `<div class="taxonomy reveal-target" data-taxonomy="${group}">
      <div class="taxonomy-list" aria-label="${labels[group]}评测维度">
        ${content.dimensions[group].map(([label], index) => `<button type="button" class="taxonomy-choice" data-action="taxonomy" data-index="${index}" aria-pressed="${index === 0}">${label}</button>`).join("")}
      </div>
      <div class="taxonomy-reading" aria-live="polite">${taxonomyBody(group, 0)}</div>
    </div>`;
  }

  function contactCard() {
    return `<div>
      <div class="copy-card">${glyph("mail")}<strong id="email-address">${content.email}</strong>${copyButton("email-address", "复制邮箱")}</div>
      <a class="mail-action" href="mailto:${content.email}">${glyph("mail")} 发送邮件</a>
    </div>`;
  }

  function mountHeroMotion() {
    const canvas = main.querySelector("#hero-motion");
    const toggle = main.querySelector(".motion-toggle");
    const context = canvas.getContext("2d");
    if (!context) return;

    let width = 0;
    let height = 0;
    let density = 1;
    let compact = false;
    let visible = false;
    let playing = !reducedMotion.matches;
    let frame = null;
    let lastTime = null;
    let elapsed = 0;
    let baseColor;

    function lineX(progress) {
      return width * (compact ? .02 + .99 * progress : .48 + .54 * progress);
    }

    function lineY(progress, lane) {
      const phase = progress * Math.PI * 3.5 - elapsed * 1.5 + lane * .3;
      const drift = Math.sin(phase) * (compact ? .025 : .075);
      return height * ((compact ? .96 - .2 * progress : .92 - .61 * progress) + drift + lane * .018);
    }

    function stroke(start, end, lane) {
      const steps = Math.ceil((end - start) * 100);
      context.beginPath();
      context.moveTo(lineX(start), lineY(start, lane));
      for (let step = 1; step <= steps; step++) {
        const progress = start + (end - start) * step / steps;
        context.lineTo(lineX(progress), lineY(progress, lane));
      }
      context.stroke();
    }

    function draw() {
      if (!width || !height) return;
      context.clearRect(0, 0, width, height);
      for (let lane = 0; lane < 4; lane++) {
        context.lineWidth = 1;
        context.strokeStyle = baseColor;
        stroke(0, 1, lane);

        const head = (elapsed * .24 + lane * .31 + .22) % 1.25 - .05;
        const start = Math.max(0, head - .20);
        const end = Math.min(1, head);
        if (end <= start) continue;

        const highlight = context.createLinearGradient(lineX(head - .20), 0, lineX(head), 0);
        highlight.addColorStop(0, "rgba(255, 158, 143, 0)");
        highlight.addColorStop(.65, "rgba(255, 189, 160, .62)");
        highlight.addColorStop(1, "#fff2d7");
        context.save();
        context.strokeStyle = highlight;
        context.lineWidth = compact ? 2 : 2.6;
        context.lineCap = "round";
        context.shadowColor = "#ffb39b";
        context.shadowBlur = 12 * density;
        stroke(start, end, lane);
        context.restore();
      }
    }

    function animate(now) {
      if (lastTime !== null) elapsed += Math.min((now - lastTime) / 1000, .05);
      lastTime = now;
      draw();
      frame = requestAnimationFrame(animate);
    }

    function updatePlayback() {
      if (playing && visible && !document.hidden) {
        if (frame === null) frame = requestAnimationFrame(animate);
      } else if (frame !== null) {
        cancelAnimationFrame(frame);
        frame = null;
        lastTime = null;
      }
    }

    function setPlaying(next) {
      playing = next;
      toggle.textContent = playing ? "暂停动效" : "播放动效";
      updatePlayback();
    }

    const resize = new ResizeObserver(([entry]) => {
      ({ width, height } = entry.contentRect);
      if (!width || !height) return;
      compact = width <= 840;
      density = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * density);
      canvas.height = Math.round(height * density);
      context.setTransform(density, 0, 0, density, 0, 0);
      baseColor = context.createLinearGradient(lineX(0), 0, lineX(1), 0);
      baseColor.addColorStop(0, "rgba(255, 163, 141, 0)");
      baseColor.addColorStop(1, "rgba(255, 188, 164, .26)");
      draw();
    });
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      updatePlayback();
    });
    const updatePreference = () => setPlaying(!reducedMotion.matches);
    toggle.addEventListener("click", () => setPlaying(!playing));
    toggle.hidden = false;
    setPlaying(playing);
    resize.observe(canvas);
    intersection.observe(canvas);
    reducedMotion.addEventListener("change", updatePreference);
    document.addEventListener("visibilitychange", updatePlayback);

    return () => {
      setPlaying(false);
      resize.disconnect();
      intersection.disconnect();
      reducedMotion.removeEventListener("change", updatePreference);
      document.removeEventListener("visibilitychange", updatePlayback);
    };
  }

  function home() {
    const count = data.local.tasks.reduce((sum, task) => sum + task.records, 0);
    return `
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-image" aria-hidden="true"></div>
        <canvas class="hero-motion" id="hero-motion" aria-hidden="true"></canvas>
        <button type="button" class="button button-glass button-compact motion-toggle" aria-controls="hero-motion" hidden>暂停动效</button>
        <div class="wrap hero-inner">
          <p class="hero-kicker">金融大模型与智能体评测</p>
          <h1 id="hero-title">${projectName}</h1>
          <div class="hero-actions">
            <a class="button button-light" href="#/evaluation-list">查看评测榜单</a>
            <a class="button button-glass" href="#/dataset/llm">浏览评测数据集</a>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="wrap">
          <div class="section-heading"><h2>大语言模型评测</h2>
            <a class="text-link" href="#/evaluation-list/LLMLeaderboard">查看大语言模型榜单</a></div>
          ${taxonomy("llm")}
        </div>
      </section>
      <section class="section section-wash">
        <div class="wrap">
          <div class="section-heading"><h2>智能体评测</h2>
            <a class="text-link" href="#/evaluation-list/AgentLeaderboard">查看智能体榜单</a></div>
          ${taxonomy("agent")}
        </div>
      </section>
      <section class="section-tight">
        <div class="wrap local-summary reveal-target">
          <div><h2>FinCapBench v1.0</h2><a class="text-link" href="#/dataset/local">查看 FinCapBench 数据集</a></div>
          <div class="stats">
            <div class="stat"><strong>${data.local.tasks.length}</strong><span>能力方向</span></div>
            <div class="stat"><strong>${content.localGroups.length}</strong><span>能力分组</span></div>
            <div class="stat"><strong>${number(count)}</strong><span>正式样本记录</span></div>
          </div>
        </div>
      </section>
      <section class="section-tight" id="contact">
        <div class="wrap split reveal-target"><h2>联系方式</h2>${contactCard()}</div>
      </section>`;
  }

  function scoreCell(value) {
    return value === null || value === undefined || !Number.isFinite(Number(value)) ? "N/A" : Number(value).toFixed(1);
  }

  function leaderRoute(group, historic = false) {
    if (historic) return group === "llm" ? "#/oldList/1" : "#/oldList/2";
    return group === "llm" ? "#/evaluation-list/LLMLeaderboard" : "#/evaluation-list/AgentLeaderboard";
  }

  function tableOverview(group) {
    return `<section class="surface">
      <div class="table-card-heading"><h2>${labels[group]}</h2><a href="${leaderRoute(group)}" class="text-link">查看更多</a></div>
      <div class="table-shell" tabindex="0" aria-label="${labels[group]}榜单概览">
        <table aria-label="${labels[group]}榜单概览">
          <thead><tr><th scope="col">排名</th><th scope="col">模型</th><th scope="col">组织 / 团队</th><th scope="col">综合得分</th></tr></thead>
          <tbody>${data.overview[group].map((row, index) => `
            <tr><td class="rank"><b>${index + 1}</b></td><td class="model-name">${escape(row.modelName)}</td>
              <td>${escape(row.ownerName)}</td><td class="score">${scoreCell(row.overallScore)}</td></tr>`).join("")}</tbody>
        </table>
      </div>
    </section>`;
  }

  function overview() {
    return `<div class="wrap page">
      ${heading("评测榜单")}
      <div class="table-grid">${tableOverview("llm")}${tableOverview("agent")}</div>
    </div>`;
  }

  function ranking(group, historic) {
    const version = data.leaderboard[group];
    rankingState = {
      board: historic ? version.old : version.current, query: "", source: "", dimension: "",
      sort: "overallScore", direction: "descending", page: 1, pageSize: 10, table: "#ranking-results",
    };
    return `<div class="wrap page">
      <div class="breadcrumb"><a href="#/evaluation-list">评测榜单</a> / ${historic ? "历史榜单" : labels[group]}</div>
      ${heading(historic ? "历史榜单" : labels[group] + "评测榜单")}
      <div class="results-bar">
        <nav class="tabs" aria-label="榜单类别">
          ${["llm", "agent"].map((type) => `<a href="${leaderRoute(type, historic)}"${activeLink(type === group)}>${labels[type]}</a>`).join("")}
        </nav>
        <div class="inline-actions">
          <button class="button button-outline button-compact" data-action="score-help" data-kind="${group}" data-history="${historic}">如何定义得分？</button>
          <label class="filter-period"><span>榜单期次</span>
            <select id="leader-period">
              ${version.periods.map((period, index) => `<option value="${leaderRoute(group, index === 1)}"${historic === (index === 1) ? " selected" : ""}>${index === 1 ? "历史 · " : ""}${escape(period)}</option>`).join("")}
            </select>
          </label>
        </div>
      </div>
      <div class="results-bar">
        ${rankingFilters()}
      </div>
      ${rankingState.board.dimensions.length ? `<div class="tabs tabs-panel" aria-label="得分维度">
        <button type="button" data-action="dimension" data-dimension="" aria-pressed="true">综合</button>
        ${rankingState.board.dimensions.map((dimension) => `<button type="button" data-action="dimension" data-dimension="${dimension.id}" aria-pressed="false">${escape(dimension.name)}</button>`).join("")}
      </div>` : ""}
      <div id="ranking-results">${rankingResults()}</div>
    </div>`;
  }

  function rankingFilters() {
    return `<div class="filters">
      <label class="search-field"><span class="sr-only">搜索模型或组织</span><input type="search" id="rank-query" placeholder="搜索模型或组织"></label>
      <label>类型 <select id="rank-source"><option value="">全部</option><option value="1">开源</option><option value="2">闭源</option></select></label>
    </div>`;
  }

  const infoKeys = new Set(["rank", "modelName", "ownerName", "releasedAt", "evaluationAt", "sourceType", "parametersScale", "completionTokens"]);

  function rankingResults() {
    const state = rankingState;
    const trimmed = state.query.trim().toLocaleLowerCase();
    const rows = state.board.rows.filter((row) =>
      (!state.source || String(row.sourceType) === state.source)
      && `${row.modelName} ${row.ownerName}`.toLocaleLowerCase().includes(trimmed));
    rows.sort((a, b) => {
      const left = a.scores[state.sort];
      const right = b.scores[state.sort];
      if (left === null || left === undefined) return right == null ? a.rank - b.rank : 1;
      if (right === null || right === undefined) return -1;
      return (state.direction === "ascending" ? left - right : right - left) || a.rank - b.rank;
    });

    const pageCount = Math.max(1, Math.ceil(rows.length / state.pageSize));
    state.page = Math.min(state.page, pageCount);
    const start = (state.page - 1) * state.pageSize;
    const info = state.board.columns.filter((entry) => infoKeys.has(entry.key) && entry.key !== "rank");
    const currentDimension = state.board.dimensions.find((a) => a.id === state.dimension);
    const scoreColumns = currentDimension?.columns ?? state.board.columns.filter((entry) => !infoKeys.has(entry.key));
    return `<div class="surface">
      <div class="table-shell" tabindex="0" aria-label="评测得分，可横向滚动">
      <table aria-label="评测得分">
        <thead><tr><th scope="col">排名</th>${info.map(({ label }) => `<th scope="col">${escape(label)}</th>`).join("")}
        ${scoreColumns.map(({ key, label }) => {
          const selected = key === state.sort;
          return `<th scope="col"${selected ? ` aria-sort="${state.direction}"` : ""}>
            <button type="button" class="sort-button" data-action="rank-sort" data-key="${escape(key)}" title="按${escape(label)}排序">${escape(label)}
              <small aria-hidden="true">${selected ? (state.direction === "ascending" ? "↑" : "↓") : "↕"}</small>
            </button></th>`;
        }).join("")}</tr></thead>
        <tbody>${rows.length ? rows.slice(start, start + state.pageSize).map((row) => `<tr>
          <td class="rank"><b>${row.rank}</b></td>
          ${info.map(({ key }) => {
            const value = key === "sourceType" ? ({ 1: "开源", 2: "闭源" }[row[key]] || "N/A") : (row[key] || "N/A");
            const cellStyle = key === "modelName" ? "model-name" : (key === "ownerName" ? "" : "data-nowrap");
            return `<td class="${cellStyle}">${escape(value)}</td>`;
          }).join("")}
          ${scoreColumns.map(({ key }) => `<td class="score">${scoreCell(row.scores[key])}</td>`).join("")}
          </tr>`).join("") : `<tr><td colspan="${info.length + scoreColumns.length + 1}" class="empty">没有符合条件的模型</td></tr>`}</tbody>
      </table></div></div>
      <div class="pagination" aria-label="榜单分页">
        <span class="small muted" role="status">共 ${rows.length} 条 · ${state.page} / ${pageCount} 页</span>
        <button type="button" class="button button-outline button-compact" data-action="rank-page" data-delta="-1"${state.page === 1 ? " disabled" : ""}>上一页</button>
        <button type="button" class="button button-outline button-compact" data-action="rank-page" data-delta="1"${state.page === pageCount ? " disabled" : ""}>下一页</button>
      </div>`;
  }

  function updateRanking(focus) {
    const target = main.querySelector(rankingState.table);
    const left = target.querySelector(".table-shell").scrollLeft;
    target.innerHTML = rankingResults();
    target.querySelector(".table-shell").scrollLeft = left;
    if (focus) target.querySelector(focus)?.focus({ preventScroll: true });
  }

  function collection(group) {
    if (group !== "local") return data.groups[group];
    return content.localGroups.map((name, index) => ({
      id: String(index + 1),
      name,
      items: data.local.tasks.filter((task) => task.id.startsWith(`${index + 1}.`)),
    }));
  }

  function datasetEntry(id) {
    for (const key of ["llm", "agent", "local"]) {
      for (const group of collection(key)) {
        const item = group.items.find((entry) => entry.id === id);
        if (item) return { item, group: group.name, key };
      }
    }
  }

  function datasetIndex(type, preselected) {
    const groups = collection(type);
    datasetState = {
      groups, query: "", type, group: groups.some(({ id }) => id === preselected) ? preselected : "",
    };
    return `<div class="wrap page">
      ${heading("评测数据集")}
      <nav class="tabs tabs-panel" aria-label="数据集类别">
        ${Object.entries(labels).map(([key, label]) => `<a href="#/dataset/${key}"${activeLink(type === key)}>${label}</a>`).join("")}
      </nav>
      <div class="results-bar">
        <div class="filters">
          <label class="search-field"><span class="sr-only">搜索数据集</span><input type="search" id="dataset-query" placeholder="搜索数据集或能力名称"></label>
          <label>分组 <select id="dataset-group"><option value="">全部</option>
            ${groups.map((group) => `<option value="${group.id}"${group.id === datasetState.group ? " selected" : ""}>${escape(group.name)}</option>`).join("")}
          </select></label>
        </div>
        <span id="dataset-count" class="small muted" role="status"></span>
      </div>
      <div id="dataset-results"></div>
    </div>`;
  }

  function datasetCard(item, type) {
    return `<a class="card" href="#/dataset-detail/${item.id}">
      <span class="card-kicker">${escape(item.code || item.id)}</span>
      <h3>${escape(item.name)}</h3>
      <p>${escape(content.datasets[item.id][0])}</p>
      <span class="card-foot">${type === "local" ? `${number(item.records)} 条 · ${escape(content.localMetrics[item.id])}` : escape(item.type)}</span>
    </a>`;
  }

  function updateCatalog() {
    const { groups, query, type, group } = datasetState;
    const needle = query.trim().toLocaleLowerCase();
    let count = 0;
    const markup = groups.filter(({ id }) => !group || group === id).map(({ name, items }) => {
      const matching = items.filter((item) =>
        [item.name, item.id, item.code, content.datasets[item.id][0]].join(" ").toLocaleLowerCase().includes(needle));
      count += matching.length;
      return matching.length ? `<section class="list-group"><h2>${escape(name)}</h2><div class="card-grid">
        ${matching.map((item) => datasetCard(item, type)).join("")}</div></section>` : "";
    }).join("");
    main.querySelector("#dataset-results").innerHTML = markup || '<p class="empty">没有符合条件的数据集</p>';
    main.querySelector("#dataset-count").textContent = `共 ${count} 项`;
  }

  function detailSample(item, key) {
    const question = content.datasets[item.id][1];
    if (key === "local") return { id: `XJTU-DEMO-${item.id}`, capability_id: item.id, question };
    if (key === "llm") return { id: "XJTU-DEMO", question, answer: "", source: item.code };
    return {
      id: "XJTU-DEMO", question, inputs: ["题目附带的虚构材料"],
      constraints: ["仅依据给定材料，记录无法确认的信息"],
      deliverables: ["结果说明与核验记录"], source: item.code,
    };
  }

  function toc(base, entries, label = "本页目录") {
    return `<nav class="toc" aria-label="${label}">${entries.map(([key, title], index) =>
      `<a href="${base}/${key}" data-section="${key}"${activeLink(index === 0, "location")}>${title}</a>`).join("")}</nav>`;
  }

  function datasetDetail(id) {
    const entry = datasetEntry(id);
    if (!entry) return missingPage();
    const { item, group, key } = entry;
    const isLocal = key === "local";
    const views = Number(readLocal(`view:${id}`, 0)) + 1;
    writeLocal(`view:${id}`, views);
    const liked = Boolean(readLocal(`like:${id}`, false));
    const metadata = isLocal
      ? { capability_id: id, primary_metric: item.metric, input_fields: item.inputFields, prediction_fields: item.predictionFields, metrics: item.metrics }
      : key === "llm"
        ? { id: "样例标识", question: "待回答的任务", answer: "答案字段", source: "数据集标识" }
        : { id: "样例标识", question: "任务目标", inputs: "输入材料", constraints: "业务与信息约束", deliverables: "预期交付物", source: "数据集标识" };
    const sample = detailSample(item, key);
    const facts = isLocal
      ? [["所属分组", group], ["主要指标", content.localMetrics[id]], ["全量记录", number(item.records)], ["核心集记录", number(item.core)]]
      : [["数据集类型", item.type], ["评测维度", group], ["资料更新时间", item.updated]];
    return `<div class="page-hero">
        <div class="wrap detail-heading">
          <div class="breadcrumb"><a href="#/dataset/${key}">评测数据集</a> / ${escape(labels[key])}</div>
          ${heading(escape(item.name))}
          <div class="activity-row">
            <button class="icon-button" data-action="dataset-like" data-id="${id}" aria-pressed="${liked}" aria-label="数据集点赞" title="在此浏览器点赞">${glyph("heart")} <span>${(item.likes || 0) + Number(liked)}</span></button>
            <span class="small muted" title="参考快照与此浏览器浏览次数">${glyph("eye")} ${number((item.views || 0) + views)}</span>
          </div>
          <dl class="meta-list">${facts.map(([title, value]) => `<div><dt>${title}</dt><dd>${escape(value)}</dd></div>`).join("")}</dl>
        </div>
      </div>
      <div class="wrap page article-grid">
        ${toc(`#/dataset-detail/${id}`, [["intro", "介绍"], ["metadata", "元数据"], ["example", "示例"]])}
        <article class="article-body">
          <section id="intro" data-spy>
            <h2>介绍</h2><p>${escape(content.datasets[id][0])}</p>
            ${isLocal ? `<p>FinCapBench ${data.local.version} · 方向 ${id} · 核心集和全量集采用相同字段约定。</p>`
              : `<p>${refLink(`/dataset-detail/${id}`, "查看参考数据集详情")}</p>`}
          </section>
          <section id="metadata" data-spy><h2>元数据</h2>${codeBox("dataset-metadata", JSON.stringify(metadata, null, 2), "JSON", "复制元数据")}</section>
          <section id="example" data-spy><h2>示例</h2>
            ${codeBox("dataset-example", JSON.stringify(sample, null, 2), "自编示例 · JSON", "复制示例")}
            <div class="inline-actions detail-actions"><button type="button" class="button button-outline" data-action="download-example" data-id="${id}">下载示例</button></div>
          </section>
        </article>
      </div>`;
  }

  const docsEntries = [
    ["intro", "平台简介"], ["prompts", "提示词"], ["metrics", "评测指标"], ["scoring", "得分计算"],
    ["overview", "评测概览"], ["api", "API 提交"], ["leaderboard", "评测榜单"], ["records", "提交记录"],
    ["faq", "常见问题"], ["contact", "联系我们"],
  ];

  function docs() {
    const prompt = "任务：根据题目材料回答财务问题。\n要求：核对期间、币种和单位。提供能定位到材料原文的证据。\n输出：答案、证据和需要保留的不确定性。";
    const sample = JSON.stringify({ model: "example-model", messages: [{ role: "user", content: "请核对题目所用的财务口径。" }] }, null, 2);
    const cli = [
      "python -m fincapbench list-capabilities",
      "python -m fincapbench run --capability 1.1 \\",
      "  --model-config configs/models/my_model.yaml --split core --limit 10",
    ].join("\n");
    const sections = {
      intro: `<p>${projectName} 提供大语言模型与智能体两类公开评测结果。前者关注金融知识、推理、合规和安全，后者关注执行长程任务和交付业务产物。</p>
        <p>本站同时提供交付项目 FinCapBench v1.0 的十八个能力方向与评分契约。不同基准的分数采用各自定义。</p>
        <p>${external(repository, projectName + " 项目")} · ${external(content.doi, "评测论文")}</p>`,
      prompts: `<p>每个任务使用匹配其输入和输出格式的提示。需要用证据作答时，保留材料出处及相应时间范围。</p>${codeBox("doc-prompt", prompt, "文本示例")}`,
      metrics: `<p>常见指标包括准确率、F1 和基于规则或评审模型的评分。智能体任务还检查证据、工具参数和产物是否符合约定。</p>
        <p><a class="text-link" href="#/dataset/local">查看 18 项 FinCapBench 指标</a></p>`,
      scoring: `<p>当前大语言模型榜单的综合分是五项维度分的算术平均值。当前智能体榜单按四个长程任务分取平均。历史版使用对应期次的指标。</p>
        <p>FinCapBench 每项任务的主指标不同，详见数据集元数据。准确率下降值越小，表示该次扰动造成的下降越少。</p>`,
      overview: `<p>确认任务与输出格式后，可以用核心集检查链路，再按需要扩大样本量。FinCapBench 本地命令示例使用交付目录中的 Python 包。</p>${codeBox("doc-cli", cli, "终端命令")}`,
      api: `<p>参考平台提供模型 API 提交。正式操作需要登录参考平台，并提供可访问的兼容接口和模型标识。下面的请求体仅展示基本字段。</p>
        ${codeBox("doc-api", sample, "JSON")}
        <p><a class="text-link" href="#/join/llm">打开参评表单演示</a> · ${refLink("/docs", "查阅正式提交说明")}</p>`,
      leaderboard: `<p>在榜单中可以切换评测期次、查看各维度和数据集得分，或按模型类型筛选。N/A 表示对应字段缺失。</p>
        <p><a class="text-link" href="#/evaluation-list">打开评测榜单</a></p>`,
      records: `<p>正式提交后，提交者可在参考平台的提交记录中查看任务审核与测评状态。</p>
        <p><button type="button" class="button button-outline" data-action="login">查看登录入口</button></p>`,
      faq: `<div class="faq">
        <details><summary>如何选择大语言模型与智能体评测？</summary><p>以文本问答和分析为主时，选择大语言模型评测。需要核查工具执行、资料处理或业务交付时，查看智能体任务。</p></details>
        <details><summary>为什么榜单会显示 N/A？</summary><p>公开数据未提供对应的参数量、日期或分数时，前端保留缺失状态。</p></details>
        <details><summary>哪里能找到最新分数和正式提交入口？</summary><p>${refLink("/evaluation-list", "参考站榜单")}提供近期发布的公开成绩，${refLink("/home", "参考站首页")}提供正式的加入评测入口。</p></details>
      </div>`,
      contact: contactCard(),
    };
    return `<div class="page-hero"><div class="wrap">${heading("文档")}</div></div>
      <div class="wrap page article-grid">
        ${toc("#/docs", docsEntries, "文档目录")}
        <article class="article-body">${docsEntries.map(([key, title]) =>
          `<section id="${key}" data-spy><h2>${title}</h2>${sections[key]}</section>`).join("")}
        </article></div>`;
  }

  function paybench() {
    return `<section class="mast-pay"><div class="wrap">
      ${heading("CNFinPayBench")}
      <a class="button button-light" href="#/paybench/submission">加入评测</a>
    </div></section>
    <div class="wrap page">
      <div class="section-heading"><h2>评测维度</h2></div>
      <div class="card-grid">
        ${data.pay.map(({ id, name, code, keywords }, index) => `
          <a class="card reveal-target" href="#/paybench/${id}">
            <span class="card-kicker">${escape(code)}</span><h3>${escape(name)}</h3>
            <p>${content.payDescriptions[index]}</p>${tags(keywords)}
            <span class="card-foot">查看更多</span>
          </a>`).join("")}
      </div>
    </div>`;
  }

  function payDetail(id) {
    const part = data.pay.find((item) => item.id === id);
    if (!part) return missingPage();
    rankingState = {
      board: part.scores, query: "", source: "", dimension: "",
      sort: "overallScore", direction: "descending", page: 1, pageSize: 10, table: "#ranking-results",
    };
    return `<div class="page-hero"><div class="wrap detail-heading">
      <div class="breadcrumb"><a href="#/paybench">CNFinPayBench</a> / 维度详情</div>
      ${heading(escape(part.name))}
    </div></div>
    <div class="wrap page article-grid">
      <aside class="detail-rail">
        <nav class="toc" aria-label="支付评测维度">
          ${data.pay.map((item) => `<a href="#/paybench/${item.id}"${activeLink(item.id === id)}>${escape(item.name)}</a>`).join("")}
        </nav>
        ${toc(`#/paybench/${id}`, [["intro", "介绍"], ["ranking", "排行榜"]])}
      </aside>
      <article class="article-body">
        <section id="intro" data-spy>
          <h2>介绍</h2>
          <p>${content.payDescriptions[Number(id) - 1]}</p>
          ${part.topics.length ? `<ul>${part.topics.map((line) => `<li>${escape(line)}</li>`).join("")}</ul>` : ""}
          <p>${refLink(`/paybench/${id}`, "查看参考基准的细分任务说明")}</p>
        </section>
        <section id="ranking" data-spy>
          <div class="section-heading"><h2>排行榜</h2>
            <a class="button button-primary button-compact" href="#/paybench/submission">加入评测</a></div>
          ${rankingFilters()}
          <div id="ranking-results" class="pay-results">${rankingResults()}</div>
        </section>
      </article>
    </div>`;
  }

  function field(label, name, options = {}) {
    const { type = "text", required = true, maxLength, min, placeholder, span = false } = options;
    return `<label class="form-field${span ? " form-span" : ""}">${label}
      <input type="${type}" name="${name}"${required ? " required" : ""}
        ${maxLength ? ` maxlength="${maxLength}"` : ""}${min !== undefined ? ` min="${min}" step="any"` : ""}
        ${placeholder ? ` placeholder="${escape(placeholder)}"` : ""}>
    </label>`;
  }

  function selectField(label, name, choices) {
    return `<label class="form-field">${label}<select name="${name}" required><option value="">请选择</option>
      ${choices.map((choice) => `<option value="${escape(choice)}">${escape(choice)}</option>`).join("")}</select></label>`;
  }

  function joinForm(type) {
    const isPay = type === "pay";
    const name = isPay ? "支付大模型" : labels[type];
    const tasks = isPay ? [] : content.dimensions[type].map(([title]) => title);
    return `<div class="wrap page">
      <div class="breadcrumb"><a href="${isPay ? "#/paybench" : "#/evaluation-list"}">${isPay ? "CNFinPayBench" : "评测榜单"}</a> / 加入评测</div>
      ${heading(`${name}评测申请`)}
      <div class="surface surface-pad">
        <form id="application-form" data-type="${type}">
          <div class="form-grid">
            ${field("单位 / 机构", "机构", { maxLength: 64 })}
            ${selectField("申请方类型", "申请方类型", data.payOptions.ownerType)}
            ${field("联系人", "联系人", { maxLength: 64 })}
            ${field("联系方式", "联系方式", { maxLength: 32 })}
            ${field("模型名称", "模型名称", { maxLength: 64 })}
            ${selectField("模型是否开源", "模型来源", data.payOptions.sourceType)}
            ${field("模型参数量（B）", "参数量（B）", { type: "number", required: false, min: 0 })}
            ${selectField("模型类型", "模型类型", data.payOptions.modelType)}
            ${isPay ? "" : `
              ${field("兼容 API 地址（演示）", "接口地址", { type: "url", required: false, span: true, placeholder: "https://example.com/v1" })}
              <fieldset class="form-span"><legend>评测维度</legend><div class="check-grid">
                ${tasks.map((title) => `<label><input type="checkbox" name="评测维度" value="${title}"> ${title}</label>`).join("")}
              </div></fieldset>`}
            <label class="form-field form-span">备注 <textarea name="备注" maxlength="500" placeholder="可填写模型或评测范围的补充说明"></textarea></label>
            <div class="inline-actions form-span">
              <button type="submit" class="button button-primary">预览申请</button>
              <button type="reset" class="button button-outline">清空表单</button>
              ${refLink(isPay ? "/paybench/submission" : "/home", "打开正式申请入口")}
            </div>
          </div>
        </form>
        <div id="form-review" hidden></div>
      </div></div>`;
  }

  function arena() {
    const cases = content.arenaCases;
    return `<div class="page-hero"><div class="wrap">${heading("智能体竞技场")}</div></div>
      <div class="wrap page">
        <div class="surface surface-pad" id="arena-demo">
          <div class="form-grid">
            <label class="form-field">评测场景 <select id="arena-case">
              ${cases.map(({ title }, unt) => `<option value="${unt}">${title}</option>`).join("")}
            </select></label>
            <div class="inline-actions arena-controls">
              <button type="button" class="button button-primary" data-action="arena-start">演示对比</button>
              <button type="button" class="button button-outline" data-action="arena-reset">重置</button>
            </div>
          </div>
          <p class="arena-question" id="arena-question">${cases[0].question}</p>
          <div class="arena-answers">
            <section class="arena-response"><h3>智能体 A</h3><p id="arena-a">等待开始</p></section>
            <section class="arena-response"><h3>智能体 B</h3><p id="arena-b">等待开始</p></section>
          </div>
          <div id="arena-vote" class="inline-actions" hidden>
            <span>哪份回答更完整？</span>
            ${["A", "B", "平局"].map((value) => `<button type="button" class="button button-outline button-compact" data-action="arena-vote" data-value="${value}" aria-pressed="false">${value}</button>`).join("")}
          </div>
          <p id="arena-status" class="form-status" role="status"></p>
        </div>
      </div>`;
  }

  let arenaTimer;
  function resetArena() {
    clearTimeout(arenaTimer);
    const choice = Number(main.querySelector("#arena-case").value);
    main.querySelector("#arena-question").textContent = content.arenaCases[choice].question;
    for (const id of ["#arena-a", "#arena-b"]) {
      const paragraph = main.querySelector(id);
      paragraph.textContent = "等待开始";
      paragraph.classList.remove("is-thinking");
    }
    main.querySelector('[data-action="arena-start"]').disabled = false;
    main.querySelector("#arena-vote").hidden = true;
    main.querySelector("#arena-status").textContent = "";
    main.querySelectorAll('[data-action="arena-vote"]').forEach((button) => button.setAttribute("aria-pressed", "false"));
  }

  function startArena(button) {
    resetArena();
    button.disabled = true;
    const select = main.querySelector("#arena-case");
    const results = content.arenaCases[Number(select.value)].answers;
    const paragraphs = [main.querySelector("#arena-a"), main.querySelector("#arena-b")];
    paragraphs.forEach((paragraph) => {
      paragraph.classList.add("is-thinking");
      paragraph.textContent = "正在显示结果…";
    });
    arenaTimer = setTimeout(() => {
      paragraphs.forEach((paragraph, index) => {
        paragraph.classList.remove("is-thinking");
        paragraph.textContent = results[index];
      });
      button.disabled = false;
      main.querySelector("#arena-vote").hidden = false;
    }, reducedMotion.matches ? 0 : 650);
  }

  function missingPage() {
    return `<div class="wrap page">${heading("页面未找到")}
      <a class="button button-primary" href="#/home">返回首页</a></div>`;
  }

  function route() {
    const path = location.hash.startsWith("#/") ? location.hash.slice(2) : "home";
    const [pathname, query = ""] = path.split("?", 2);
    return { parts: pathname.split("/").filter(Boolean), params: new URLSearchParams(query) };
  }

  function renderLocation() {
    const { parts, params } = route();
    const [page = "home", detail, anchor] = parts;
    const isDataset = page === "dataset" && Object.hasOwn(labels, detail || "llm");
    const hasAnchor = page === "home" || page === "docs" || page === "dataset-detail" || (page === "paybench" && detail !== "submission");
    const targetId = hasAnchor ? ((page === "home" || page === "docs") ? detail : anchor) : "";
    const key = `${page}/${page === "home" || page === "docs" ? "" : (detail || "")}/${isDataset ? params.get("group") || "" : ""}`;
    const newPage = activePage !== key;
    if (newPage) {
      const hadPage = activePage !== "";
      activePage = key;
      stopHeroMotion?.();
      clearTimeout(arenaTimer);
      clearTimeout(toastTimer);
      toast.hidden = true;
      if (dialog.open) dialog.close();
      mountHeader(page);

      let view;
      switch (page) {
        case "home":
          view = home();
          break;
        case "evaluation-list":
          if (!detail) view = overview();
          else if (detail === "LLMLeaderboard") view = ranking("llm", false);
          else if (detail === "AgentLeaderboard") view = ranking("agent", false);
          break;
        case "oldList":
          if (detail === "1" || detail === "2") view = ranking(detail === "1" ? "llm" : "agent", true);
          break;
        case "dataset":
          if (isDataset) view = datasetIndex(detail || "llm", params.get("group"));
          break;
        case "dataset-detail":
          view = datasetDetail(detail);
          break;
        case "docs":
          view = docs();
          break;
        case "paybench":
          view = detail === "submission" ? joinForm("pay") : (detail ? payDetail(detail) : paybench());
          break;
        case "join":
          if (detail === "llm" || detail === "agent") view = joinForm(detail);
          break;
        case "arena":
          view = arena();
          break;
      }

      main.innerHTML = view || missingPage();
      stopHeroMotion = page === "home" ? mountHeroMotion() : undefined;
      if (isDataset) updateCatalog();
      const title = main.querySelector("h1")?.textContent;
      document.title = title && title !== projectName ? `${title} | ${projectName} · XJTUSE` : `${projectName} | XJTUSE`;
      if (hadPage) main.focus({ preventScroll: true });
      revealPage();
      scrollSpy = main.querySelectorAll("[data-spy]");
    }

    if (targetId) {
      const target = document.getElementById(targetId);
      if (main.contains(target)) target.scrollIntoView({ behavior: !newPage && !reducedMotion.matches ? "smooth" : "instant" });
    } else if (newPage || !detail) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
    updateScrollState();
  }

  function revealPage() {
    revealObserver?.disconnect();
    revealObserver = new IntersectionObserver((entries, observer) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: .12 });
    main.querySelectorAll(".reveal-target").forEach((element) => revealObserver.observe(element));
  }

  function updateScrollState() {
    const y = window.scrollY;
    header.classList.toggle("is-scrolled", y > 12);
    topButton.hidden = y < 530;

    if (scrollSpy?.length) {
      let id = scrollSpy[0].id;
      const line = header.offsetHeight + 100;
      for (const section of scrollSpy) {
        if (section.getBoundingClientRect().top > line) break;
        id = section.id;
      }
      if (y > 0 && Math.ceil(y + window.innerHeight) >= document.documentElement.scrollHeight) {
        id = scrollSpy[scrollSpy.length - 1].id;
      }
      main.querySelectorAll(".toc [data-section]").forEach((link) => {
        if (link.dataset.section === id) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    }
  }

  function actionFor(control) {
    const { action, id, index, key, dimension, delta, kind, history, value } = control.dataset;
    switch (action) {
      case "join-menu": {
        const isOpen = control.getAttribute("aria-expanded") === "true";
        showJoin(control.matches(":hover") && matchMedia("(hover: hover)").matches ? true : !isOpen);
        break;
      }
      case "menu": {
        const expanded = header.querySelector("#navigation").classList.toggle("is-open");
        control.setAttribute("aria-expanded", expanded);
        control.setAttribute("aria-label", expanded ? "收起导航" : "展开导航");
        break;
      }
      case "login":
        startLogin();
        break;
      case "logout":
        logout(control);
        break;
      case "close-dialog":
        dialog.close();
        break;
      case "taxonomy": {
        const area = control.closest("[data-taxonomy]");
        area.querySelectorAll(".taxonomy-choice").forEach((button) => button.setAttribute("aria-pressed", button === control));
        area.querySelector(".taxonomy-reading").innerHTML = taxonomyBody(area.dataset.taxonomy, Number(index));
        break;
      }
      case "score-help": {
        const dimensions = kind === "llm" ? "五个金融评测维度" : (history === "true" ? "历史版五个智能体评测维度" : "四个金融长程任务");
        showDialog("如何定义得分？", `<p>本期综合得分为${dimensions}分数的算术平均值。</p>
          <p>切换维度可查看分项表现。N/A 表示公开资料缺少该字段。</p>
          <div class="inline-actions"><button type="button" class="button button-primary" data-action="close-dialog">知道了</button></div>`);
        break;
      }
      case "dimension": {
        rankingState.dimension = dimension;
        rankingState.sort = "overallScore";
        rankingState.direction = "descending";
        rankingState.page = 1;
        control.parentElement.querySelectorAll("button").forEach((button) => button.setAttribute("aria-pressed", button === control));
        updateRanking();
        break;
      }
      case "rank-sort":
        rankingState.direction = rankingState.sort === key && rankingState.direction === "descending" ? "ascending" : "descending";
        rankingState.sort = key;
        rankingState.page = 1;
        updateRanking(`[data-key="${key}"]`);
        break;
      case "rank-page":
        rankingState.page += Number(delta);
        updateRanking(`[data-delta="${delta}"]:not(:disabled), [data-action="rank-page"]:not(:disabled)`);
        break;
      case "dataset-like": {
        const liked = control.getAttribute("aria-pressed") === "false";
        writeLocal(`like:${id}`, liked);
        control.setAttribute("aria-pressed", liked);
        control.querySelector("span").textContent = (datasetEntry(id).item.likes || 0) + Number(liked);
        announce(liked ? "已点赞" : "已取消点赞");
        break;
      }
      case "download-example": {
        const { item, key: datasetType } = datasetEntry(id);
        downloadJson(detailSample(item, datasetType), `${id}-xjtu-example.json`);
        announce("已导出示例");
        break;
      }
      case "arena-start":
        startArena(control);
        break;
      case "arena-reset":
        main.querySelector("#arena-case").selectedIndex = 0;
        resetArena();
        break;
      case "arena-vote":
        control.parentElement.querySelectorAll("button").forEach((button) => button.setAttribute("aria-pressed", control === button));
        main.querySelector("#arena-status").textContent = `本次演示选择：${value}`;
        break;
    }
  }

  document.addEventListener("click", (event) => {
    const target = event.target;
    const copy = target.closest("[data-copy]");
    if (copy) {
      copyText(document.getElementById(copy.dataset.copy).textContent);
      return;
    }
    const control = target.closest("[data-action]");
    if (control) actionFor(control);

    const internal = target.closest('a[href^="#/"]');
    if (!target.closest("#join-menu") || internal) showJoin(false);
    header.querySelectorAll(".account-menu[open]").forEach((menu) => {
      if (!menu.contains(target)) menu.open = false;
    });
    if (internal && internal.getAttribute("href") === location.hash && !event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey) {
      event.preventDefault();
      renderLocation();
    }
    if (target === dialog) {
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || dialog.open) return;
    const account = header.querySelector(".account-menu[open]");
    if (account) {
      account.open = false;
      account.querySelector("summary").focus();
      return;
    }
    const menu = header.querySelector('[data-action="join-menu"]');
    if (menu.getAttribute("aria-expanded") === "true") {
      showJoin(false);
      menu.focus();
    }
    const button = header.querySelector('[data-action="menu"]');
    if (button.getAttribute("aria-expanded") === "true") {
      header.querySelector("#navigation").classList.remove("is-open");
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", "展开导航");
      button.focus();
    }
  });

  main.addEventListener("input", (event) => {
    if (event.target.id === "rank-query") {
      rankingState.query = event.target.value;
      rankingState.page = 1;
      updateRanking();
    }
    if (event.target.id === "dataset-query") {
      datasetState.query = event.target.value;
      updateCatalog();
    }
  });

  main.addEventListener("change", (event) => {
    const { id, value } = event.target;
    if (id === "leader-period") location.hash = value;
    if (id === "rank-source") {
      rankingState.source = value;
      rankingState.page = 1;
      updateRanking();
    }
    if (id === "dataset-group") {
      datasetState.group = value;
      updateCatalog();
    }
    if (id === "arena-case") resetArena();
  });

  main.addEventListener("submit", (event) => {
    if (event.target.id !== "application-form") return;
    event.preventDefault();
    const summary = new Map();
    for (const [label, value] of new FormData(event.target)) {
      if (!value.trim()) continue;
      summary.set(label, summary.has(label) ? `${summary.get(label)}、${value}` : value);
    }
    const preview = main.querySelector("#form-review");
    preview.innerHTML = `<h2>申请预览</h2><dl class="meta-list">${[...summary].map(([label, value]) =>
      `<div><dt>${escape(label)}</dt><dd>${escape(value)}</dd></div>`).join("")}</dl>`;
    preview.hidden = false;
    preview.scrollIntoView({ behavior: reducedMotion.matches ? "instant" : "smooth", block: "start" });
    announce("已生成申请预览");
  });

  main.addEventListener("reset", (event) => {
    if (event.target.id === "application-form") {
      const preview = main.querySelector("#form-review");
      preview.replaceChildren();
      preview.hidden = true;
    }
  });

  document.querySelector(".skip-link").addEventListener("click", (event) => {
    event.preventDefault();
    main.focus();
    main.scrollIntoView();
  });
  topButton.innerHTML = glyph("up");
  topButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reducedMotion.matches ? "instant" : "smooth" }));
  window.addEventListener("scroll", () => {
    if (scrollPending) return;
    scrollPending = true;
    requestAnimationFrame(() => {
      scrollPending = false;
      updateScrollState();
    });
  }, { passive: true });
  window.addEventListener("resize", updateScrollState);
  window.addEventListener("hashchange", renderLocation);
  mountFooter();
  renderLocation();
  refreshSession();
  window.addEventListener("pageshow", (event) => {
    if (event.persisted && authBase) {
      updateAccount(null);
      refreshSession();
    }
  });
})();
