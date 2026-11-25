// Public CNFinBench score and catalog facts, plus local manifest/schema metadata. See README.md for origins.
window.BenchSnapshots = {
  "captured": "2026-11-25",
  "leaderboard": {
    "llm": {
      "current": {
        "columns": [
          {
            "key": "modelName",
            "label": "模型名称"
          },
          {
            "key": "ownerName",
            "label": "组织/团队名称"
          },
          {
            "key": "releasedAt",
            "label": "发布日期"
          },
          {
            "key": "sourceType",
            "label": "类型"
          },
          {
            "key": "parametersScale",
            "label": "参数量"
          },
          {
            "key": "completionTokens",
            "label": "completion_tokens"
          },
          {
            "key": "overallScore",
            "label": "综合得分"
          },
          {
            "key": "finProKnowledgeDim",
            "label": "金融专业知识问答"
          },
          {
            "key": "finBusinessAnalysisDim",
            "label": "金融业务理解与分析"
          },
          {
            "key": "finFactualReasoningCalcuDim",
            "label": "金融事实推理与计算"
          },
          {
            "key": "finComplianceRiskCtrlDim",
            "label": "金融合规与风险控制"
          },
          {
            "key": "finInternalAppSecDim",
            "label": "金融内生与应用安全"
          }
        ],
        "rows": [
          {
            "rank": 1,
            "modelName": "doubao-seed-2-1-pro-260628",
            "ownerName": "ByteDance",
            "releasedAt": "2026-06-23",
            "evaluationAt": "2026-10-28",
            "sourceType": 2,
            "parametersScale": "N/A",
            "completionTokens": "24199K",
            "scores": {
              "bankAccountFraudDetectDim": 50.7,
              "creditScoreDim": 89.3,
              "finAppSecDim": 88.2,
              "finBasicsDim": 94.0,
              "finBusinessAnalysisDim": 74.9,
              "finCertExamsDim": 91.3,
              "finComplianceDim": 90.0,
              "finComplianceRiskCtrlDim": 89.4,
              "finFactualReasoningCalcuDim": 74.0,
              "finInfoExtractDim": 60.5,
              "finInternalAppSecDim": 87.7,
              "finInternalSecDim": 87.1,
              "finNumCalcDim": 59.1,
              "finProKnowledgeDim": 92.7,
              "finReasonAlignDim": 77.5,
              "finReasonConsistencyDim": 41.9,
              "finReasonInsightDim": 99.0,
              "finReportParseDim": 98.0,
              "finRiskCtrlDim": 88.7,
              "loanAnalysisDim": 79.3,
              "overallScore": 83.7,
              "quantInvestDim": 88.0
            }
          },
          {
            "rank": 2,
            "modelName": "kimi-k3",
            "ownerName": "Moonshot",
            "releasedAt": "2026-07-16",
            "evaluationAt": "2026-10-28",
            "sourceType": 1,
            "parametersScale": "2.8T",
            "completionTokens": "11898K",
            "scores": {
              "bankAccountFraudDetectDim": 50.7,
              "creditScoreDim": 91.3,
              "finAppSecDim": 74.2,
              "finBasicsDim": 92.0,
              "finBusinessAnalysisDim": 80.1,
              "finCertExamsDim": 90.7,
              "finComplianceDim": 91.3,
              "finComplianceRiskCtrlDim": 90.0,
              "finFactualReasoningCalcuDim": 79.3,
              "finInfoExtractDim": 62.3,
              "finInternalAppSecDim": 73.5,
              "finInternalSecDim": 72.8,
              "finNumCalcDim": 59.1,
              "finProKnowledgeDim": 91.4,
              "finReasonAlignDim": 93.8,
              "finReasonConsistencyDim": 59.3,
              "finReasonInsightDim": 98.9,
              "finReportParseDim": 100.0,
              "finRiskCtrlDim": 88.7,
              "loanAnalysisDim": 89.3,
              "overallScore": 82.9,
              "quantInvestDim": 91.3
            }
          },
          {
            "rank": 3,
            "modelName": "deepseek-v4.1-flash",
            "ownerName": "DeepSeek AI",
            "releasedAt": "2026-09-10",
            "evaluationAt": "2026-10-28",
            "sourceType": 1,
            "parametersScale": "763B",
            "completionTokens": "12688K",
            "scores": {
              "bankAccountFraudDetectDim": 50.0,
              "creditScoreDim": 90.7,
              "finAppSecDim": 81.8,
              "finBasicsDim": 86.0,
              "finBusinessAnalysisDim": 80.0,
              "finCertExamsDim": 90.0,
              "finComplianceDim": 84.7,
              "finComplianceRiskCtrlDim": 81.7,
              "finFactualReasoningCalcuDim": 74.8,
              "finInfoExtractDim": 61.0,
              "finInternalAppSecDim": 78.4,
              "finInternalSecDim": 74.9,
              "finNumCalcDim": 50.3,
              "finProKnowledgeDim": 88.0,
              "finReasonAlignDim": 72.4,
              "finReasonConsistencyDim": 66.1,
              "finReasonInsightDim": 95.4,
              "finReportParseDim": 97.3,
              "finRiskCtrlDim": 78.7,
              "loanAnalysisDim": 93.3,
              "overallScore": 80.6,
              "quantInvestDim": 92.0
            }
          },
          {
            "rank": 4,
            "modelName": "gpt-6.1-sol",
            "ownerName": "OpenAI",
            "releasedAt": "2026-09-29",
            "evaluationAt": "2026-10-28",
            "sourceType": 2,
            "parametersScale": "N/A",
            "completionTokens": "1918K",
            "scores": {
              "bankAccountFraudDetectDim": 65.3,
              "creditScoreDim": 91.3,
              "finAppSecDim": 62.1,
              "finBasicsDim": 88.0,
              "finBusinessAnalysisDim": 80.1,
              "finCertExamsDim": 90.0,
              "finComplianceDim": 84.7,
              "finComplianceRiskCtrlDim": 84.0,
              "finFactualReasoningCalcuDim": 83.3,
              "finInfoExtractDim": 60.1,
              "finInternalAppSecDim": 66.4,
              "finInternalSecDim": 70.6,
              "finNumCalcDim": 57.7,
              "finProKnowledgeDim": 89.0,
              "finReasonAlignDim": 98.0,
              "finReasonConsistencyDim": 71.4,
              "finReasonInsightDim": 90.3,
              "finReportParseDim": 98.7,
              "finRiskCtrlDim": 83.3,
              "loanAnalysisDim": 92.0,
              "overallScore": 80.6,
              "quantInvestDim": 95.3
            }
          },
          {
            "rank": 5,
            "modelName": "Intern-S2-Preview-397B",
            "ownerName": "Shanghai AI Laboratory",
            "releasedAt": "2026-07-17",
            "evaluationAt": "2026-10-28",
            "sourceType": 1,
            "parametersScale": "397B",
            "completionTokens": "13099K",
            "scores": {
              "bankAccountFraudDetectDim": 50.0,
              "creditScoreDim": 86.7,
              "finAppSecDim": 79.6,
              "finBasicsDim": 93.3,
              "finBusinessAnalysisDim": 69.3,
              "finCertExamsDim": 86.0,
              "finComplianceDim": 92.7,
              "finComplianceRiskCtrlDim": 88.4,
              "finFactualReasoningCalcuDim": 73.5,
              "finInfoExtractDim": 63.4,
              "finInternalAppSecDim": 80.5,
              "finInternalSecDim": 81.4,
              "finNumCalcDim": 51.7,
              "finProKnowledgeDim": 89.7,
              "finReasonAlignDim": 89.2,
              "finReasonConsistencyDim": 19.3,
              "finReasonInsightDim": 96.4,
              "finReportParseDim": 98.0,
              "finRiskCtrlDim": 84.0,
              "loanAnalysisDim": 80.7,
              "overallScore": 80.3,
              "quantInvestDim": 82.7
            }
          },
          {
            "rank": 6,
            "modelName": "gemini-3.1-pro-preview",
            "ownerName": "Google",
            "releasedAt": "2026-02-19",
            "evaluationAt": "2026-10-28",
            "sourceType": 2,
            "parametersScale": "N/A",
            "completionTokens": "8038K",
            "scores": {
              "bankAccountFraudDetectDim": 41.3,
              "creditScoreDim": 87.3,
              "finAppSecDim": 67.0,
              "finBasicsDim": 89.3,
              "finBusinessAnalysisDim": 80.9,
              "finCertExamsDim": 91.3,
              "finComplianceDim": 84.0,
              "finComplianceRiskCtrlDim": 83.7,
              "finFactualReasoningCalcuDim": 76.5,
              "finInfoExtractDim": 62.1,
              "finInternalAppSecDim": 68.5,
              "finInternalSecDim": 70.0,
              "finNumCalcDim": 55.0,
              "finProKnowledgeDim": 90.3,
              "finReasonAlignDim": 97.8,
              "finReasonConsistencyDim": 68.1,
              "finReasonInsightDim": 95.5,
              "finReportParseDim": 98.0,
              "finRiskCtrlDim": 83.3,
              "loanAnalysisDim": 90.0,
              "overallScore": 80.0,
              "quantInvestDim": 87.3
            }
          },
          {
            "rank": 7,
            "modelName": "claude-opus-5-5",
            "ownerName": "Anthropic",
            "releasedAt": "2026-09-22",
            "evaluationAt": "2026-10-28",
            "sourceType": 2,
            "parametersScale": "N/A",
            "completionTokens": "3123K",
            "scores": {
              "bankAccountFraudDetectDim": 75.3,
              "creditScoreDim": 86.7,
              "finAppSecDim": 72.2,
              "finBasicsDim": 88.7,
              "finBusinessAnalysisDim": 66.5,
              "finCertExamsDim": 90.7,
              "finComplianceDim": 86.0,
              "finComplianceRiskCtrlDim": 84.0,
              "finFactualReasoningCalcuDim": 80.5,
              "finInfoExtractDim": 61.3,
              "finInternalAppSecDim": 74.7,
              "finInternalSecDim": 77.1,
              "finNumCalcDim": 47.7,
              "finProKnowledgeDim": 89.7,
              "finReasonAlignDim": 93.3,
              "finReasonConsistencyDim": 72.4,
              "finReasonInsightDim": 97.1,
              "finReportParseDim": 35.3,
              "finRiskCtrlDim": 82.0,
              "loanAnalysisDim": 92.0,
              "overallScore": 79.1,
              "quantInvestDim": 88.0
            }
          },
          {
            "rank": 8,
            "modelName": "MTFin-Qwen3.8-V2",
            "ownerName": "美团金融大模型应用中心",
            "releasedAt": "2026-11-19",
            "evaluationAt": "2026-11-19",
            "sourceType": 2,
            "parametersScale": "27B",
            "completionTokens": "1385K",
            "scores": {
              "bankAccountFraudDetectDim": 59.3,
              "creditScoreDim": 68.7,
              "finAppSecDim": 97.3,
              "finBasicsDim": 78.7,
              "finBusinessAnalysisDim": 79.0,
              "finCertExamsDim": 71.3,
              "finComplianceDim": 76.0,
              "finComplianceRiskCtrlDim": 72.7,
              "finFactualReasoningCalcuDim": 59.8,
              "finInfoExtractDim": 69.5,
              "finInternalAppSecDim": 93.4,
              "finInternalSecDim": 89.4,
              "finNumCalcDim": 33.6,
              "finProKnowledgeDim": 75.0,
              "finReasonAlignDim": 62.6,
              "finReasonConsistencyDim": 64.3,
              "finReasonInsightDim": 83.0,
              "finReportParseDim": 99.3,
              "finRiskCtrlDim": 69.3,
              "loanAnalysisDim": 90.7,
              "overallScore": 76.0,
              "quantInvestDim": 44.0
            }
          },
          {
            "rank": 9,
            "modelName": "Dowsure-Fin-27B-V1",
            "ownerName": "Dowsure",
            "releasedAt": "2026-11-20",
            "evaluationAt": "2026-11-20",
            "sourceType": 2,
            "parametersScale": "27B",
            "completionTokens": "4360K",
            "scores": {
              "bankAccountFraudDetectDim": 50.0,
              "creditScoreDim": 84.7,
              "finAppSecDim": 71.2,
              "finBasicsDim": 81.3,
              "finBusinessAnalysisDim": 80.5,
              "finCertExamsDim": 78.0,
              "finComplianceDim": 71.3,
              "finComplianceRiskCtrlDim": 70.7,
              "finFactualReasoningCalcuDim": 74.3,
              "finInfoExtractDim": 60.1,
              "finInternalAppSecDim": 75.0,
              "finInternalSecDim": 78.7,
              "finNumCalcDim": 83.9,
              "finProKnowledgeDim": 79.7,
              "finReasonAlignDim": 84.9,
              "finReasonConsistencyDim": 66.4,
              "finReasonInsightDim": 96.9,
              "finReportParseDim": 98.7,
              "finRiskCtrlDim": 70.0,
              "loanAnalysisDim": 70.0,
              "overallScore": 76.0,
              "quantInvestDim": 72.0
            }
          },
          {
            "rank": 10,
            "modelName": "qwen3.8-max",
            "ownerName": "Alibaba",
            "releasedAt": "2026-08-03",
            "evaluationAt": "2026-10-28",
            "sourceType": 1,
            "parametersScale": "2.4T",
            "completionTokens": "4483K",
            "scores": {
              "bankAccountFraudDetectDim": 50.0,
              "creditScoreDim": 90.7,
              "finAppSecDim": 80.7,
              "finBasicsDim": 88.0,
              "finBusinessAnalysisDim": 71.4,
              "finCertExamsDim": 88.0,
              "finComplianceDim": 85.3,
              "finComplianceRiskCtrlDim": 78.3,
              "finFactualReasoningCalcuDim": 56.6,
              "finInfoExtractDim": 60.7,
              "finInternalAppSecDim": 80.1,
              "finInternalSecDim": 79.4,
              "finNumCalcDim": 58.4,
              "finProKnowledgeDim": 88.0,
              "finReasonAlignDim": 43.1,
              "finReasonConsistencyDim": 62.5,
              "finReasonInsightDim": 97.6,
              "finReportParseDim": 64.7,
              "finRiskCtrlDim": 71.3,
              "loanAnalysisDim": 88.0,
              "overallScore": 74.9,
              "quantInvestDim": 9.3
            }
          },
          {
            "rank": 11,
            "modelName": "MiniMax-M3",
            "ownerName": "MiniMax",
            "releasedAt": "2026-06-01",
            "evaluationAt": "2026-10-28",
            "sourceType": 1,
            "parametersScale": "428B",
            "completionTokens": "15795K",
            "scores": {
              "bankAccountFraudDetectDim": 50.0,
              "creditScoreDim": 90.7,
              "finAppSecDim": 62.6,
              "finBasicsDim": 76.0,
              "finBusinessAnalysisDim": 78.7,
              "finCertExamsDim": 66.0,
              "finComplianceDim": 64.0,
              "finComplianceRiskCtrlDim": 64.0,
              "finFactualReasoningCalcuDim": 69.0,
              "finInfoExtractDim": 54.5,
              "finInternalAppSecDim": 65.0,
              "finInternalSecDim": 67.3,
              "finNumCalcDim": 54.4,
              "finProKnowledgeDim": 71.0,
              "finReasonAlignDim": 61.1,
              "finReasonConsistencyDim": 64.9,
              "finReasonInsightDim": 96.8,
              "finReportParseDim": 98.7,
              "finRiskCtrlDim": 64.0,
              "loanAnalysisDim": 82.7,
              "overallScore": 69.5,
              "quantInvestDim": 75.3
            }
          }
        ],
        "dimensions": [
          {
            "id": "1",
            "name": "金融专业知识问答",
            "columns": [
              {
                "key": "overallScore",
                "label": "综合得分"
              },
              {
                "key": "finProKnowledgeDim",
                "label": "金融专业知识问答"
              },
              {
                "key": "finBasicsDim",
                "label": "Fin_Basics （Accuracy）"
              },
              {
                "key": "finCertExamsDim",
                "label": "Fin_Cert_Exams （Accuracy）"
              }
            ]
          },
          {
            "id": "2",
            "name": "金融业务理解与分析",
            "columns": [
              {
                "key": "overallScore",
                "label": "综合得分"
              },
              {
                "key": "finBusinessAnalysisDim",
                "label": "金融业务理解与分析"
              },
              {
                "key": "finInfoExtractDim",
                "label": "Fin_Info_Extract （Micro-F1）"
              },
              {
                "key": "finReportParseDim",
                "label": "Fin_Report_Parse （Accuracy）"
              },
              {
                "key": "finReasonConsistencyDim",
                "label": "Fin_Reason_Consistency （Agent-as-a-Judge）"
              },
              {
                "key": "finReasonInsightDim",
                "label": "Fin_Reason_Insight （Agent-as-a-Judge）"
              }
            ]
          },
          {
            "id": "3",
            "name": "金融事实推理与计算",
            "columns": [
              {
                "key": "overallScore",
                "label": "综合得分"
              },
              {
                "key": "finFactualReasoningCalcuDim",
                "label": "金融事实推理与计算"
              },
              {
                "key": "creditScoreDim",
                "label": "Credit_Score （Accuracy）"
              },
              {
                "key": "quantInvestDim",
                "label": "Quant_Invest （Accuracy）"
              },
              {
                "key": "loanAnalysisDim",
                "label": "Loan_Analysis （Accuracy）"
              },
              {
                "key": "bankAccountFraudDetectDim",
                "label": "BankAccount_Fraud_Detect （Accuracy）"
              },
              {
                "key": "finNumCalcDim",
                "label": "Fin_Num_Calc （Accuracy）"
              },
              {
                "key": "finReasonAlignDim",
                "label": "Fin_Reason_Align （Evidence-binding F1）"
              }
            ]
          },
          {
            "id": "4",
            "name": "金融合规与风险控制",
            "columns": [
              {
                "key": "overallScore",
                "label": "综合得分"
              },
              {
                "key": "finComplianceRiskCtrlDim",
                "label": "金融合规与风险控制"
              },
              {
                "key": "finComplianceDim",
                "label": "Fin_Compliance （Accuracy）"
              },
              {
                "key": "finRiskCtrlDim",
                "label": "Fin_Risk_Ctrl （Accuracy）"
              }
            ]
          },
          {
            "id": "5",
            "name": "金融内生与应用安全",
            "columns": [
              {
                "key": "overallScore",
                "label": "综合得分"
              },
              {
                "key": "finInternalAppSecDim",
                "label": "金融内生与应用安全"
              },
              {
                "key": "finInternalSecDim",
                "label": "Fin_Internal_Sec （Agent-as-a-Judge）"
              },
              {
                "key": "finAppSecDim",
                "label": "Fin_App_Sec （Agent-as-a-Judge）"
              }
            ]
          }
        ],
        "updated": "2026-11-20 13:52:30"
      },
      "old": {
        "columns": [
          {
            "key": "modelName",
            "label": "模型名称"
          },
          {
            "key": "ownerName",
            "label": "组织/团队名称"
          },
          {
            "key": "releasedAt",
            "label": "发布日期"
          },
          {
            "key": "sourceType",
            "label": "类型"
          },
          {
            "key": "parametersScale",
            "label": "参数量"
          },
          {
            "key": "overallScore",
            "label": "综合得分"
          },
          {
            "key": "finProKnowledgeDim",
            "label": "金融专业知识问答"
          },
          {
            "key": "finBusinessAnalysisDim",
            "label": "金融业务理解与分析"
          },
          {
            "key": "finFactualReasoningCalcuDim",
            "label": "金融事实推理与计算"
          },
          {
            "key": "finComplianceRiskCtrlDim",
            "label": "金融合规与风险控制"
          },
          {
            "key": "finInternalAppSecDim",
            "label": "金融内生与应用安全"
          }
        ],
        "rows": [
          {
            "modelName": "msxf-fin-qwen3.8-v1",
            "ownerName": "马上消费人工智能研究院",
            "releasedAt": "2026-10-31",
            "evaluationAt": "2026-11-01",
            "sourceType": 2,
            "parametersScale": "27B",
            "rank": 1,
            "scores": {
              "creditScore": 72.7,
              "finAppSec": 89.5,
              "finBasics": 86.1,
              "finBusinessAnalysisDim": 67.7,
              "finCertExams": 69.3,
              "finCompliance": 68.9,
              "finComplianceRiskCtrlDim": 68.2,
              "finFactualReasoningCalcuDim": 84.0,
              "finInfoExtract": 36.4,
              "finInternalAppSecDim": 85.3,
              "finInternalSec": 81.0,
              "finNumCalc": 92.0,
              "finProKnowledgeDim": 77.7,
              "finReportParse": 93.2,
              "finRiskCtrl": 67.5,
              "finTextGen": 73.5,
              "loanAnalysis": 86.7,
              "onlinePayFraudDetect": 79.9,
              "overallScore": 76.6,
              "quantInvest": 88.5
            }
          },
          {
            "modelName": "BankGpt-Qwen3.8-V1",
            "ownerName": "平安银行算法团队",
            "releasedAt": "2026-10-22",
            "evaluationAt": "2026-10-22",
            "sourceType": 2,
            "parametersScale": "27B",
            "rank": 2,
            "scores": {
              "creditScore": 73.3,
              "finAppSec": 97.6,
              "finBasics": 75.5,
              "finBusinessAnalysisDim": 74.4,
              "finCertExams": 68.6,
              "finCompliance": 56.6,
              "finComplianceRiskCtrlDim": 60.8,
              "finFactualReasoningCalcuDim": 79.5,
              "finInfoExtract": 56.5,
              "finInternalAppSecDim": 92.0,
              "finInternalSec": 86.4,
              "finNumCalc": 54.9,
              "finProKnowledgeDim": 72.1,
              "finReportParse": 95.6,
              "finRiskCtrl": 64.9,
              "finTextGen": 71.0,
              "loanAnalysis": 82.7,
              "onlinePayFraudDetect": 97.4,
              "overallScore": 76.4,
              "quantInvest": 89.0
            }
          },
          {
            "modelName": "PinganGPT-Qwen3.6-V1",
            "ownerName": "平安集团金融风控与财资联合研发团队",
            "releasedAt": "2026-07-10",
            "evaluationAt": "2026-08-18",
            "sourceType": 2,
            "parametersScale": "27B",
            "rank": 3,
            "scores": {
              "creditScore": 66.0,
              "finAppSec": 89.1,
              "finBasics": 85.5,
              "finBusinessAnalysisDim": 70.5,
              "finCertExams": 69.3,
              "finCompliance": 67.4,
              "finComplianceRiskCtrlDim": 68.0,
              "finFactualReasoningCalcuDim": 80.6,
              "finInfoExtract": 46.4,
              "finInternalAppSecDim": 82.9,
              "finInternalSec": 76.7,
              "finNumCalc": 91.2,
              "finProKnowledgeDim": 77.4,
              "finReportParse": 91.3,
              "finRiskCtrl": 68.6,
              "finTextGen": 73.9,
              "loanAnalysis": 88.0,
              "onlinePayFraudDetect": 68.2,
              "overallScore": 75.9,
              "quantInvest": 89.4
            }
          },
          {
            "modelName": "MTFin-Qwen3.8-V1",
            "ownerName": "美团金融大模型应用中心",
            "releasedAt": "2026-10-26",
            "evaluationAt": "2026-10-26",
            "sourceType": 2,
            "parametersScale": "27B",
            "rank": 4,
            "scores": {
              "creditScore": 77.3,
              "finAppSec": 98.9,
              "finBasics": 79.9,
              "finBusinessAnalysisDim": 64.0,
              "finCertExams": 67.0,
              "finCompliance": 65.3,
              "finComplianceRiskCtrlDim": 65.5,
              "finFactualReasoningCalcuDim": 77.8,
              "finInfoExtract": 59.1,
              "finInternalAppSecDim": 96.4,
              "finInternalSec": 93.8,
              "finNumCalc": 85.0,
              "finProKnowledgeDim": 73.5,
              "finReportParse": 85.5,
              "finRiskCtrl": 65.7,
              "finTextGen": 47.5,
              "loanAnalysis": 80.7,
              "onlinePayFraudDetect": 64.9,
              "overallScore": 75.4,
              "quantInvest": 81.3
            }
          },
          {
            "modelName": "PaySage1.0-Flash",
            "ownerName": "中国银联-阿里云联合团队",
            "releasedAt": "2026-07-29",
            "evaluationAt": "2026-07-29",
            "sourceType": 2,
            "parametersScale": "27B",
            "rank": 5,
            "scores": {
              "creditScore": 70.0,
              "finAppSec": 84.2,
              "finBasics": 85.3,
              "finBusinessAnalysisDim": 67.9,
              "finCertExams": 69.0,
              "finCompliance": 59.6,
              "finComplianceRiskCtrlDim": 64.5,
              "finFactualReasoningCalcuDim": 78.7,
              "finInfoExtract": 37.6,
              "finInternalAppSecDim": 77.2,
              "finInternalSec": 70.2,
              "finNumCalc": 90.3,
              "finProKnowledgeDim": 77.2,
              "finReportParse": 92.6,
              "finRiskCtrl": 69.3,
              "finTextGen": 73.6,
              "loanAnalysis": 84.7,
              "onlinePayFraudDetect": 60.4,
              "overallScore": 73.1,
              "quantInvest": 87.9
            }
          },
          {
            "modelName": "PinganGPT-Qwen3-V1",
            "ownerName": "Omni-Sinitic",
            "releasedAt": "2026-03-06",
            "evaluationAt": "2026-03-29",
            "sourceType": 2,
            "parametersScale": "235B",
            "rank": 6,
            "scores": {
              "creditScore": 70.0,
              "finAppSec": 75.7,
              "finBasics": 86.5,
              "finBusinessAnalysisDim": 66.9,
              "finCertExams": 65.0,
              "finCompliance": 62.1,
              "finComplianceRiskCtrlDim": 63.1,
              "finFactualReasoningCalcuDim": 77.3,
              "finInfoExtract": 38.5,
              "finInternalAppSecDim": 73.6,
              "finInternalSec": 71.5,
              "finNumCalc": 79.6,
              "finProKnowledgeDim": 75.8,
              "finReportParse": 90.5,
              "finRiskCtrl": 64.1,
              "finTextGen": 71.7,
              "loanAnalysis": 81.3,
              "onlinePayFraudDetect": 68.8,
              "overallScore": 71.3,
              "quantInvest": 86.9
            }
          },
          {
            "modelName": "PaySage1.0-Turbo",
            "ownerName": "中国银联-上海人工智能实验室联合团队",
            "releasedAt": "2026-07-29",
            "evaluationAt": "2026-07-29",
            "sourceType": 2,
            "parametersScale": "35B",
            "rank": 7,
            "scores": {
              "creditScore": 64.0,
              "finAppSec": 91.2,
              "finBasics": 78.2,
              "finBusinessAnalysisDim": 63.5,
              "finCertExams": 59.4,
              "finCompliance": 52.0,
              "finComplianceRiskCtrlDim": 56.9,
              "finFactualReasoningCalcuDim": 76.6,
              "finInfoExtract": 27.1,
              "finInternalAppSecDim": 85.4,
              "finInternalSec": 79.6,
              "finNumCalc": 86.7,
              "finProKnowledgeDim": 68.8,
              "finReportParse": 91.1,
              "finRiskCtrl": 61.7,
              "finTextGen": 72.4,
              "loanAnalysis": 89.3,
              "onlinePayFraudDetect": 58.4,
              "overallScore": 70.2,
              "quantInvest": 84.8
            }
          },
          {
            "modelName": "qishu-finance-v1(nt)",
            "ownerName": "东营启数智能科技有限公司吕文迪团队",
            "releasedAt": "2026-03-21",
            "evaluationAt": "2026-03-24",
            "sourceType": 2,
            "parametersScale": "27B",
            "rank": 8,
            "scores": {
              "creditScore": 68.0,
              "finAppSec": 89.0,
              "finBasics": 62.6,
              "finBusinessAnalysisDim": 66.2,
              "finCertExams": 58.1,
              "finCompliance": 52.8,
              "finComplianceRiskCtrlDim": 56.7,
              "finFactualReasoningCalcuDim": 69.3,
              "finInfoExtract": 31.3,
              "finInternalAppSecDim": 86.4,
              "finInternalSec": 83.7,
              "finNumCalc": 55.8,
              "finProKnowledgeDim": 60.4,
              "finReportParse": 93.2,
              "finRiskCtrl": 60.5,
              "finTextGen": 74.1,
              "loanAnalysis": 76.0,
              "onlinePayFraudDetect": 58.4,
              "overallScore": 67.8,
              "quantInvest": 88.3
            }
          },
          {
            "modelName": "GPT-MTFin",
            "ownerName": "MT-Fin",
            "releasedAt": "2026-10-14",
            "evaluationAt": "2026-10-14",
            "sourceType": 2,
            "parametersScale": "27B",
            "rank": 9,
            "scores": {
              "creditScore": 68.7,
              "finAppSec": 97.6,
              "finBasics": 68.2,
              "finBusinessAnalysisDim": 47.8,
              "finCertExams": 63.0,
              "finCompliance": 60.1,
              "finComplianceRiskCtrlDim": 62.6,
              "finFactualReasoningCalcuDim": 61.8,
              "finInfoExtract": 0.0,
              "finInternalAppSecDim": 96.2,
              "finInternalSec": 94.8,
              "finNumCalc": 37.2,
              "finProKnowledgeDim": 65.6,
              "finReportParse": 88.5,
              "finRiskCtrl": 65.1,
              "finTextGen": 55.0,
              "loanAnalysis": 67.3,
              "onlinePayFraudDetect": 54.5,
              "overallScore": 66.8,
              "quantInvest": 81.3
            }
          },
          {
            "modelName": "PinganGPT-Qwen3-32B",
            "ownerName": "Omni-Sinitic",
            "releasedAt": "2026-02-05",
            "evaluationAt": "2026-03-04",
            "sourceType": 2,
            "parametersScale": "32B",
            "rank": 10,
            "scores": {
              "creditScore": 70.7,
              "finAppSec": 80.5,
              "finBasics": 75.8,
              "finBusinessAnalysisDim": 56.7,
              "finCertExams": 62.7,
              "finCompliance": 54.1,
              "finComplianceRiskCtrlDim": 54.7,
              "finFactualReasoningCalcuDim": 78.0,
              "finInfoExtract": 4.5,
              "finInternalAppSecDim": 72.0,
              "finInternalSec": 63.4,
              "finNumCalc": 88.5,
              "finProKnowledgeDim": 69.3,
              "finReportParse": 92.9,
              "finRiskCtrl": 55.2,
              "finTextGen": 72.7,
              "loanAnalysis": 81.3,
              "onlinePayFraudDetect": 59.1,
              "overallScore": 66.1,
              "quantInvest": 90.4
            }
          },
          {
            "modelName": "DeepSeek-R1",
            "ownerName": "DeepSeek",
            "releasedAt": "2025-05-28",
            "evaluationAt": "2025-12-15",
            "sourceType": 1,
            "parametersScale": "671B",
            "rank": 11,
            "scores": {
              "creditScore": 66.0,
              "finAppSec": 73.8,
              "finBasics": 81.9,
              "finBusinessAnalysisDim": 54.4,
              "finCertExams": 65.0,
              "finCompliance": 33.5,
              "finComplianceRiskCtrlDim": 48.8,
              "finFactualReasoningCalcuDim": 76.9,
              "finInfoExtract": 27.3,
              "finInternalAppSecDim": 76.6,
              "finInternalSec": 79.3,
              "finNumCalc": 92.9,
              "finProKnowledgeDim": 73.5,
              "finReportParse": 79.1,
              "finRiskCtrl": 64.1,
              "finTextGen": 56.8,
              "loanAnalysis": 88.0,
              "onlinePayFraudDetect": 64.9,
              "overallScore": 66.0,
              "quantInvest": 72.6
            }
          },
          {
            "modelName": "Dowsure-Fin-14B",
            "ownerName": "Dowsure",
            "releasedAt": "2026-10-21",
            "evaluationAt": "2026-10-21",
            "sourceType": 2,
            "parametersScale": "14B",
            "rank": 12,
            "scores": {
              "creditScore": 71.3,
              "finAppSec": 84.6,
              "finBasics": 59.7,
              "finBusinessAnalysisDim": 62.7,
              "finCertExams": 64.4,
              "finCompliance": 55.0,
              "finComplianceRiskCtrlDim": 54.8,
              "finFactualReasoningCalcuDim": 64.2,
              "finInfoExtract": 34.6,
              "finInternalAppSecDim": 78.3,
              "finInternalSec": 72.0,
              "finNumCalc": 38.9,
              "finProKnowledgeDim": 62.1,
              "finReportParse": 85.2,
              "finRiskCtrl": 54.6,
              "finTextGen": 68.2,
              "loanAnalysis": 82.7,
              "onlinePayFraudDetect": 53.9,
              "overallScore": 64.4,
              "quantInvest": 74.2
            }
          },
          {
            "modelName": "Doubao-1.5-pro",
            "ownerName": "ByteDance",
            "releasedAt": "2025-01-22",
            "evaluationAt": "2025-12-15",
            "sourceType": 2,
            "parametersScale": "N/A",
            "rank": 13,
            "scores": {
              "creditScore": 72.7,
              "finAppSec": 78.1,
              "finBasics": 83.1,
              "finBusinessAnalysisDim": 52.8,
              "finCertExams": 62.7,
              "finCompliance": 55.8,
              "finComplianceRiskCtrlDim": 57.4,
              "finFactualReasoningCalcuDim": 66.0,
              "finInfoExtract": 29.9,
              "finInternalAppSecDim": 72.4,
              "finInternalSec": 66.6,
              "finNumCalc": 68.1,
              "finProKnowledgeDim": 72.9,
              "finReportParse": 74.6,
              "finRiskCtrl": 58.9,
              "finTextGen": 54.0,
              "loanAnalysis": 84.7,
              "onlinePayFraudDetect": 35.1,
              "overallScore": 64.3,
              "quantInvest": 69.6
            }
          },
          {
            "modelName": "Claude-sonnet4",
            "ownerName": "Anthropic",
            "releasedAt": "2025-05-22",
            "evaluationAt": "2025-12-15",
            "sourceType": 2,
            "parametersScale": "N/A",
            "rank": 14,
            "scores": {
              "creditScore": 67.3,
              "finAppSec": 83.8,
              "finBasics": 76.9,
              "finBusinessAnalysisDim": 61.2,
              "finCertExams": 65.7,
              "finCompliance": 40.6,
              "finComplianceRiskCtrlDim": 51.5,
              "finFactualReasoningCalcuDim": 52.7,
              "finInfoExtract": 47.9,
              "finInternalAppSecDim": 80.8,
              "finInternalSec": 77.8,
              "finNumCalc": 46.9,
              "finProKnowledgeDim": 71.3,
              "finReportParse": 78.7,
              "finRiskCtrl": 62.3,
              "finTextGen": 56.9,
              "loanAnalysis": 31.3,
              "onlinePayFraudDetect": 57.8,
              "overallScore": 63.5,
              "quantInvest": 60.4
            }
          },
          {
            "modelName": "Qwen3-235B-A22B-Instruct",
            "ownerName": "Alibaba",
            "releasedAt": "2025-07-21",
            "evaluationAt": "2025-12-15",
            "sourceType": 1,
            "parametersScale": "235B-A22B",
            "rank": 15,
            "scores": {
              "creditScore": 68.0,
              "finAppSec": 78.7,
              "finBasics": 71.7,
              "finBusinessAnalysisDim": 60.4,
              "finCertExams": 55.1,
              "finCompliance": 56.8,
              "finComplianceRiskCtrlDim": 51.6,
              "finFactualReasoningCalcuDim": 62.3,
              "finInfoExtract": 29.0,
              "finInternalAppSecDim": 73.1,
              "finInternalSec": 67.5,
              "finNumCalc": 28.3,
              "finProKnowledgeDim": 63.4,
              "finReportParse": 84.8,
              "finRiskCtrl": 46.3,
              "finTextGen": 67.3,
              "loanAnalysis": 82.0,
              "onlinePayFraudDetect": 62.3,
              "overallScore": 62.2,
              "quantInvest": 70.7
            }
          },
          {
            "modelName": "Gemini-2.5-Flash",
            "ownerName": "Google",
            "releasedAt": "2025-04-17",
            "evaluationAt": "2025-12-15",
            "sourceType": 2,
            "parametersScale": "N/A",
            "rank": 16,
            "scores": {
              "creditScore": 67.3,
              "finAppSec": 99.9,
              "finBasics": 16.6,
              "finBusinessAnalysisDim": 65.2,
              "finCertExams": 29.4,
              "finCompliance": 35.2,
              "finComplianceRiskCtrlDim": 36.6,
              "finFactualReasoningCalcuDim": 70.2,
              "finInfoExtract": 38.5,
              "finInternalAppSecDim": 99.7,
              "finInternalSec": 99.4,
              "finNumCalc": 58.4,
              "finProKnowledgeDim": 23.0,
              "finReportParse": 87.3,
              "finRiskCtrl": 37.9,
              "finTextGen": 69.7,
              "loanAnalysis": 84.7,
              "onlinePayFraudDetect": 60.4,
              "overallScore": 58.9,
              "quantInvest": 80.4
            }
          },
          {
            "modelName": "Dowsure-Fin-4B-v0.1",
            "ownerName": "Dowsure",
            "releasedAt": "2026-09-18",
            "evaluationAt": "2026-09-18",
            "sourceType": 2,
            "parametersScale": "4B",
            "rank": 17,
            "scores": {
              "creditScore": 66.7,
              "finAppSec": 77.2,
              "finBasics": 49.2,
              "finBusinessAnalysisDim": 54.6,
              "finCertExams": 58.4,
              "finCompliance": 51.2,
              "finComplianceRiskCtrlDim": 53.6,
              "finFactualReasoningCalcuDim": 60.6,
              "finInfoExtract": 14.7,
              "finInternalAppSecDim": 70.2,
              "finInternalSec": 63.1,
              "finNumCalc": 31.0,
              "finProKnowledgeDim": 53.8,
              "finReportParse": 83.8,
              "finRiskCtrl": 56.0,
              "finTextGen": 65.2,
              "loanAnalysis": 88.0,
              "onlinePayFraudDetect": 46.1,
              "overallScore": 58.6,
              "quantInvest": 71.0
            }
          },
          {
            "modelName": "TouchstoneGPT-7B-Instruct",
            "ownerName": "IDEA Research",
            "releasedAt": "2024-11-08",
            "evaluationAt": "2025-12-15",
            "sourceType": 1,
            "parametersScale": "7B",
            "rank": 18,
            "scores": {
              "creditScore": 64.7,
              "finAppSec": 81.9,
              "finBasics": 71.5,
              "finBusinessAnalysisDim": 40.8,
              "finCertExams": 58.1,
              "finCompliance": 55.8,
              "finComplianceRiskCtrlDim": 53.5,
              "finFactualReasoningCalcuDim": 59.3,
              "finInfoExtract": 0.0,
              "finInternalAppSecDim": 73.4,
              "finInternalSec": 64.9,
              "finNumCalc": 25.7,
              "finProKnowledgeDim": 64.8,
              "finReportParse": 73.2,
              "finRiskCtrl": 51.2,
              "finTextGen": 49.1,
              "loanAnalysis": 75.3,
              "onlinePayFraudDetect": 57.8,
              "overallScore": 58.4,
              "quantInvest": 73.2
            }
          },
          {
            "modelName": "GPT-4o",
            "ownerName": "OpenAI",
            "releasedAt": "2025-05-13",
            "evaluationAt": "2025-12-15",
            "sourceType": 2,
            "parametersScale": "N/A",
            "rank": 19,
            "scores": {
              "creditScore": 73.3,
              "finAppSec": 76.0,
              "finBasics": 35.3,
              "finBusinessAnalysisDim": 63.9,
              "finCertExams": 39.6,
              "finCompliance": 40.8,
              "finComplianceRiskCtrlDim": 41.8,
              "finFactualReasoningCalcuDim": 69.0,
              "finInfoExtract": 40.8,
              "finInternalAppSecDim": 70.8,
              "finInternalSec": 65.5,
              "finNumCalc": 61.1,
              "finProKnowledgeDim": 37.5,
              "finReportParse": 84.0,
              "finRiskCtrl": 42.8,
              "finTextGen": 67.0,
              "loanAnalysis": 81.3,
              "onlinePayFraudDetect": 59.7,
              "overallScore": 56.6,
              "quantInvest": 69.8
            }
          },
          {
            "modelName": "Kimi-K2-Instruct",
            "ownerName": "Moonshot",
            "releasedAt": "2025-09-05",
            "evaluationAt": "2025-12-15",
            "sourceType": 1,
            "parametersScale": "1000B",
            "rank": 20,
            "scores": {
              "creditScore": 69.3,
              "finAppSec": 75.3,
              "finBasics": 35.4,
              "finBusinessAnalysisDim": 49.8,
              "finCertExams": 35.3,
              "finCompliance": 36.9,
              "finComplianceRiskCtrlDim": 41.5,
              "finFactualReasoningCalcuDim": 70.8,
              "finInfoExtract": 23.5,
              "finInternalAppSecDim": 70.7,
              "finInternalSec": 66.1,
              "finNumCalc": 70.8,
              "finProKnowledgeDim": 35.4,
              "finReportParse": 77.5,
              "finRiskCtrl": 46.0,
              "finTextGen": 48.4,
              "loanAnalysis": 82.0,
              "onlinePayFraudDetect": 65.6,
              "overallScore": 53.6,
              "quantInvest": 66.5
            }
          },
          {
            "modelName": "Fin-R1",
            "ownerName": "SUFE-AIFLM-Lab",
            "releasedAt": "2025-03-21",
            "evaluationAt": "2025-12-15",
            "sourceType": 1,
            "parametersScale": "7B",
            "rank": 21,
            "scores": {
              "creditScore": 74.0,
              "finAppSec": 74.8,
              "finBasics": 39.6,
              "finBusinessAnalysisDim": 50.8,
              "finCertExams": 34.0,
              "finCompliance": 27.9,
              "finComplianceRiskCtrlDim": 31.4,
              "finFactualReasoningCalcuDim": 60.1,
              "finInfoExtract": 8.5,
              "finInternalAppSecDim": 68.5,
              "finInternalSec": 62.1,
              "finNumCalc": 20.4,
              "finProKnowledgeDim": 36.8,
              "finReportParse": 78.0,
              "finRiskCtrl": 34.8,
              "finTextGen": 65.9,
              "loanAnalysis": 80.7,
              "onlinePayFraudDetect": 60.4,
              "overallScore": 49.5,
              "quantInvest": 64.9
            }
          },
          {
            "modelName": "Llama3.3-70B-Instruct",
            "ownerName": "Meta",
            "releasedAt": "2024-12-06",
            "evaluationAt": "2025-12-15",
            "sourceType": 1,
            "parametersScale": "70B",
            "rank": 22,
            "scores": {
              "creditScore": 70.0,
              "finAppSec": 70.7,
              "finBasics": 28.3,
              "finBusinessAnalysisDim": 53.8,
              "finCertExams": 17.5,
              "finCompliance": 21.6,
              "finComplianceRiskCtrlDim": 24.3,
              "finFactualReasoningCalcuDim": 59.8,
              "finInfoExtract": 24.5,
              "finInternalAppSecDim": 69.0,
              "finInternalSec": 67.3,
              "finNumCalc": 23.0,
              "finProKnowledgeDim": 22.9,
              "finReportParse": 81.9,
              "finRiskCtrl": 26.9,
              "finTextGen": 55.1,
              "loanAnalysis": 82.0,
              "onlinePayFraudDetect": 54.6,
              "overallScore": 46.0,
              "quantInvest": 69.6
            }
          }
        ],
        "dimensions": [
          {
            "id": "1",
            "name": "金融专业知识问答",
            "columns": [
              {
                "key": "overallScore",
                "label": "综合得分"
              },
              {
                "key": "finProKnowledgeDim",
                "label": "金融专业知识问答"
              },
              {
                "key": "finBasics",
                "label": "Fin_Basics"
              },
              {
                "key": "finCertExams",
                "label": "Fin_Cert_Exams"
              }
            ]
          },
          {
            "id": "2",
            "name": "金融业务理解与分析",
            "columns": [
              {
                "key": "overallScore",
                "label": "综合得分"
              },
              {
                "key": "finBusinessAnalysisDim",
                "label": "金融业务理解与分析"
              },
              {
                "key": "finInfoExtract",
                "label": "Fin_Info_Extract"
              },
              {
                "key": "finReportParse",
                "label": "Fin_Report_Parse"
              },
              {
                "key": "finTextGen",
                "label": "Fin_Text_Gen"
              }
            ]
          },
          {
            "id": "3",
            "name": "金融事实推理与计算",
            "columns": [
              {
                "key": "overallScore",
                "label": "综合得分"
              },
              {
                "key": "finFactualReasoningCalcuDim",
                "label": "金融事实推理与计算"
              },
              {
                "key": "creditScore",
                "label": "Credit_Score"
              },
              {
                "key": "quantInvest",
                "label": "Quant_Invest"
              },
              {
                "key": "loanAnalysis",
                "label": "Loan_Analysis"
              },
              {
                "key": "onlinePayFraudDetect",
                "label": "Online_Pay_Fraud_Detect"
              },
              {
                "key": "finNumCalc",
                "label": "Fin_Num_Calc"
              }
            ]
          },
          {
            "id": "4",
            "name": "金融合规与风险控制",
            "columns": [
              {
                "key": "overallScore",
                "label": "综合得分"
              },
              {
                "key": "finComplianceRiskCtrlDim",
                "label": "金融合规与风险控制"
              },
              {
                "key": "finCompliance",
                "label": "Fin_Compliance"
              },
              {
                "key": "finRiskCtrl",
                "label": "Fin_Risk_Ctrl"
              }
            ]
          },
          {
            "id": "5",
            "name": "金融内生与应用安全",
            "columns": [
              {
                "key": "overallScore",
                "label": "综合得分"
              },
              {
                "key": "finInternalAppSecDim",
                "label": "金融内生与应用安全"
              },
              {
                "key": "finInternalSec",
                "label": "Fin_Internal_Sec"
              },
              {
                "key": "finAppSec",
                "label": "Fin_App_Sec"
              }
            ]
          }
        ],
        "updated": "2026-11-01 00:10:52"
      },
      "periods": [
        "2026年11月-至今",
        "2025年12月-2026年11月"
      ]
    },
    "agent": {
      "current": {
        "columns": [
          {
            "key": "modelName",
            "label": "模型名称"
          },
          {
            "key": "ownerName",
            "label": "组织/团队名称"
          },
          {
            "key": "releasedAt",
            "label": "发布日期"
          },
          {
            "key": "sourceType",
            "label": "类型"
          },
          {
            "key": "parametersScale",
            "label": "参数量"
          },
          {
            "key": "completionTokens",
            "label": "completion_tokens"
          },
          {
            "key": "overallScore",
            "label": "综合得分"
          },
          {
            "key": "researchDueDiligenceDim",
            "label": "证据化投研与尽调"
          },
          {
            "key": "financialModelDim",
            "label": "财务分析与模型维护"
          },
          {
            "key": "bankComplianceDim",
            "label": "银行业务与合规管控"
          },
          {
            "key": "quantPortfolioDim",
            "label": "量化投资与组合管理"
          }
        ],
        "rows": [
          {
            "rank": 1,
            "modelName": "gpt-5.6-sol",
            "ownerName": "OpenAI",
            "releasedAt": "2026-07-10",
            "evaluationAt": "2026-10-30",
            "sourceType": 2,
            "parametersScale": "N/A",
            "completionTokens": "113555K",
            "scores": {
              "bankComplianceDim": 77.9,
              "financialModelDim": 75.0,
              "overallScore": 78.1,
              "quantPortfolioDim": 73.8,
              "researchDueDiligenceDim": 85.5
            }
          },
          {
            "rank": 2,
            "modelName": "kimi-k3",
            "ownerName": "Moonshot",
            "releasedAt": "2026-07-16",
            "evaluationAt": "2026-10-30",
            "sourceType": 1,
            "parametersScale": "2.8T",
            "completionTokens": "106620K",
            "scores": {
              "bankComplianceDim": 63.1,
              "financialModelDim": 83.5,
              "overallScore": 69.3,
              "quantPortfolioDim": 63.0,
              "researchDueDiligenceDim": 67.5
            }
          },
          {
            "rank": 3,
            "modelName": "qwen3.8-max",
            "ownerName": "Alibaba",
            "releasedAt": "2026-08-03",
            "evaluationAt": "2026-10-30",
            "sourceType": 1,
            "parametersScale": "2.4T",
            "completionTokens": "164204K",
            "scores": {
              "bankComplianceDim": 63.9,
              "financialModelDim": 79.0,
              "overallScore": 63.0,
              "quantPortfolioDim": 56.6,
              "researchDueDiligenceDim": 52.5
            }
          },
          {
            "rank": 4,
            "modelName": "doubao-seed-2-1-pro-260628",
            "ownerName": "ByteDance",
            "releasedAt": "2026-06-23",
            "evaluationAt": "2026-10-30",
            "sourceType": 2,
            "parametersScale": "N/A",
            "completionTokens": "194079K",
            "scores": {
              "bankComplianceDim": 50.3,
              "financialModelDim": 65.0,
              "overallScore": 60.2,
              "quantPortfolioDim": 61.9,
              "researchDueDiligenceDim": 63.4
            }
          },
          {
            "rank": 5,
            "modelName": "gemini-3.1-pro-preview",
            "ownerName": "Google",
            "releasedAt": "2026-02-19",
            "evaluationAt": "2026-10-30",
            "sourceType": 2,
            "parametersScale": "N/A",
            "completionTokens": "92855K",
            "scores": {
              "bankComplianceDim": 56.0,
              "financialModelDim": 47.5,
              "overallScore": 54.3,
              "quantPortfolioDim": 58.6,
              "researchDueDiligenceDim": 55.0
            }
          },
          {
            "rank": 6,
            "modelName": "deepseek-v4-pro",
            "ownerName": "DeepSeek",
            "releasedAt": "2026-08-13",
            "evaluationAt": "2026-10-30",
            "sourceType": 1,
            "parametersScale": "1.6T",
            "completionTokens": "105521K",
            "scores": {
              "bankComplianceDim": 58.7,
              "financialModelDim": 41.0,
              "overallScore": 52.7,
              "quantPortfolioDim": 63.1,
              "researchDueDiligenceDim": 48.0
            }
          }
        ],
        "dimensions": [],
        "updated": "2026-10-30 16:42:28"
      },
      "old": {
        "columns": [
          {
            "key": "modelName",
            "label": "模型名称"
          },
          {
            "key": "ownerName",
            "label": "组织/团队名称"
          },
          {
            "key": "releasedAt",
            "label": "发布日期"
          },
          {
            "key": "sourceType",
            "label": "类型"
          },
          {
            "key": "parametersScale",
            "label": "参数量"
          },
          {
            "key": "overallScore",
            "label": "综合得分"
          },
          {
            "key": "finTaskPlanReasonDim",
            "label": "金融任务规划与推理"
          },
          {
            "key": "finInstrInvocaDim",
            "label": "金融工具调用与执行"
          },
          {
            "key": "finScenaPerceptDim",
            "label": "金融场景感知与交互"
          },
          {
            "key": "memoryCtxPreseveDim",
            "label": "记忆与上下文保持"
          },
          {
            "key": "finMultiAgentCollDim",
            "label": "金融多智能体协作"
          }
        ],
        "rows": [
          {
            "modelName": "PaySage1.0-Flash",
            "ownerName": "中国银联-阿里云联合团队",
            "releasedAt": "2026-07-29",
            "evaluationAt": "2026-07-29",
            "sourceType": 2,
            "parametersScale": "27B",
            "rank": 1,
            "scores": {
              "finInstrInvocaDim": 91.3,
              "finMultiAgentCollDim": 82.4,
              "finScenaPerceptDim": 96.1,
              "finTaskPlanReasonDim": 77.1,
              "memoryCtxPreseveDim": 85.8,
              "overallScore": 86.5
            }
          },
          {
            "modelName": "DeepSeek-R1",
            "ownerName": "DeepSeek",
            "releasedAt": "2025-05-28",
            "evaluationAt": "2025-12-15",
            "sourceType": 1,
            "parametersScale": "671B",
            "rank": 2,
            "scores": {
              "finInstrInvocaDim": 84.1,
              "finMultiAgentCollDim": 76.9,
              "finScenaPerceptDim": 95.2,
              "finTaskPlanReasonDim": 70.9,
              "memoryCtxPreseveDim": 90.1,
              "overallScore": 83.4
            }
          },
          {
            "modelName": "Kimi-K2-Instruct",
            "ownerName": "Moonshot",
            "releasedAt": "2025-09-05",
            "evaluationAt": "2025-12-15",
            "sourceType": 1,
            "parametersScale": "1000B",
            "rank": 3,
            "scores": {
              "finInstrInvocaDim": 86.6,
              "finMultiAgentCollDim": 81.5,
              "finScenaPerceptDim": 86.3,
              "finTaskPlanReasonDim": 64.8,
              "memoryCtxPreseveDim": 88.5,
              "overallScore": 81.5
            }
          },
          {
            "modelName": "Claude-sonnet4",
            "ownerName": "Anthropic",
            "releasedAt": "2025-05-22",
            "evaluationAt": "2025-12-15",
            "sourceType": 2,
            "parametersScale": "N/A",
            "rank": 4,
            "scores": {
              "finInstrInvocaDim": 86.3,
              "finMultiAgentCollDim": 80.1,
              "finScenaPerceptDim": 92.1,
              "finTaskPlanReasonDim": 74.4,
              "memoryCtxPreseveDim": 71.0,
              "overallScore": 80.8
            }
          },
          {
            "modelName": "PaySage1.0-Turbo",
            "ownerName": "中国银联-上海人工智能实验室联合团队",
            "releasedAt": "2026-07-29",
            "evaluationAt": "2026-07-29",
            "sourceType": 2,
            "parametersScale": "35B",
            "rank": 5,
            "scores": {
              "finInstrInvocaDim": 85.8,
              "finMultiAgentCollDim": 75.1,
              "finScenaPerceptDim": 89.7,
              "finTaskPlanReasonDim": 73.6,
              "memoryCtxPreseveDim": 77.6,
              "overallScore": 80.4
            }
          },
          {
            "modelName": "Qwen3-235B-A22B-Instruct",
            "ownerName": "Alibaba",
            "releasedAt": "2025-07-21",
            "evaluationAt": "2025-12-15",
            "sourceType": 1,
            "parametersScale": "235B-A22B",
            "rank": 6,
            "scores": {
              "finInstrInvocaDim": 86.6,
              "finMultiAgentCollDim": 73.1,
              "finScenaPerceptDim": 91.4,
              "finTaskPlanReasonDim": 68.6,
              "memoryCtxPreseveDim": 75.5,
              "overallScore": 79.0
            }
          },
          {
            "modelName": "Doubao-1.5-pro",
            "ownerName": "ByteDance",
            "releasedAt": "2025-01-22",
            "evaluationAt": "2025-12-15",
            "sourceType": 2,
            "parametersScale": "N/A",
            "rank": 7,
            "scores": {
              "finInstrInvocaDim": 80.3,
              "finMultiAgentCollDim": 74.8,
              "finScenaPerceptDim": 86.3,
              "finTaskPlanReasonDim": 59.6,
              "memoryCtxPreseveDim": 72.7,
              "overallScore": 74.7
            }
          },
          {
            "modelName": "GPT-4o",
            "ownerName": "OpenAI",
            "releasedAt": "2025-05-13",
            "evaluationAt": "2025-12-15",
            "sourceType": 2,
            "parametersScale": "N/A",
            "rank": 8,
            "scores": {
              "finInstrInvocaDim": 81.0,
              "finMultiAgentCollDim": 72.3,
              "finScenaPerceptDim": 77.9,
              "finTaskPlanReasonDim": 58.3,
              "memoryCtxPreseveDim": 72.8,
              "overallScore": 72.5
            }
          },
          {
            "modelName": "Llama3.3-70B-Instruct",
            "ownerName": "Meta",
            "releasedAt": "2024-12-06",
            "evaluationAt": "2025-12-15",
            "sourceType": 1,
            "parametersScale": "70B",
            "rank": 9,
            "scores": {
              "finInstrInvocaDim": 78.0,
              "finMultiAgentCollDim": 69.9,
              "finScenaPerceptDim": 85.3,
              "finTaskPlanReasonDim": 54.7,
              "memoryCtxPreseveDim": 71.9,
              "overallScore": 72.0
            }
          },
          {
            "modelName": "Gemini-2.5-Flash",
            "ownerName": "Google",
            "releasedAt": "2025-04-17",
            "evaluationAt": "2025-12-15",
            "sourceType": 2,
            "parametersScale": "N/A",
            "rank": 10,
            "scores": {
              "finInstrInvocaDim": 71.7,
              "finMultiAgentCollDim": 51.9,
              "finScenaPerceptDim": 88.0,
              "finTaskPlanReasonDim": 62.8,
              "memoryCtxPreseveDim": 73.6,
              "overallScore": 69.6
            }
          },
          {
            "modelName": "Fin-R1",
            "ownerName": "SUFE-AIFLM-Lab",
            "releasedAt": "2025-03-21",
            "evaluationAt": "2025-12-15",
            "sourceType": 1,
            "parametersScale": "7B",
            "rank": 11,
            "scores": {
              "finInstrInvocaDim": 75.5,
              "finMultiAgentCollDim": 69.7,
              "finScenaPerceptDim": 81.1,
              "finTaskPlanReasonDim": 53.1,
              "memoryCtxPreseveDim": 42.7,
              "overallScore": 64.4
            }
          },
          {
            "modelName": "TouchstoneGPT-7B-Instruct",
            "ownerName": "IDEA Research",
            "releasedAt": "2024-11-08",
            "evaluationAt": "2025-12-15",
            "sourceType": 1,
            "parametersScale": "7B",
            "rank": 12,
            "scores": {
              "finInstrInvocaDim": 64.6,
              "finMultiAgentCollDim": 58.5,
              "finScenaPerceptDim": 63.2,
              "finTaskPlanReasonDim": 43.7,
              "memoryCtxPreseveDim": 64.7,
              "overallScore": 58.9
            }
          }
        ],
        "dimensions": [
          {
            "id": "6",
            "name": "金融任务规划与推理",
            "columns": [
              {
                "key": "overallScore",
                "label": "综合得分"
              },
              {
                "key": "finTaskPlanReasonDim",
                "label": "金融任务规划与推理"
              }
            ]
          },
          {
            "id": "7",
            "name": "金融工具调用与执行",
            "columns": [
              {
                "key": "overallScore",
                "label": "综合得分"
              },
              {
                "key": "finInstrInvocaDim",
                "label": "金融工具调用与执行"
              }
            ]
          },
          {
            "id": "8",
            "name": "金融场景感知与交互",
            "columns": [
              {
                "key": "overallScore",
                "label": "综合得分"
              },
              {
                "key": "finScenaPerceptDim",
                "label": "金融场景感知与交互"
              }
            ]
          },
          {
            "id": "9",
            "name": "记忆与上下文保持",
            "columns": [
              {
                "key": "overallScore",
                "label": "综合得分"
              },
              {
                "key": "memoryCtxPreseveDim",
                "label": "记忆与上下文保持"
              }
            ]
          },
          {
            "id": "10",
            "name": "金融多智能体协作",
            "columns": [
              {
                "key": "overallScore",
                "label": "综合得分"
              },
              {
                "key": "finMultiAgentCollDim",
                "label": "金融多智能体协作"
              }
            ]
          }
        ],
        "updated": "2026-07-29 19:00:16"
      },
      "periods": [
        "2026年11月-至今",
        "2025年12月-2026年11月"
      ]
    }
  },
  "overview": {
    "llm": [
      {
        "modelName": "doubao-seed-2-1-pro-260628",
        "ownerName": "ByteDance",
        "overallScore": "83.7"
      },
      {
        "modelName": "kimi-k3",
        "ownerName": "Moonshot",
        "overallScore": "82.9"
      },
      {
        "modelName": "deepseek-v4.1-flash",
        "ownerName": "DeepSeek AI",
        "overallScore": "80.6"
      },
      {
        "modelName": "gpt-6.1-sol",
        "ownerName": "OpenAI",
        "overallScore": "80.6"
      },
      {
        "modelName": "Intern-S2-Preview-397B",
        "ownerName": "Shanghai AI Laboratory",
        "overallScore": "80.3"
      },
      {
        "modelName": "gemini-3.1-pro-preview",
        "ownerName": "Google",
        "overallScore": "80.0"
      },
      {
        "modelName": "claude-opus-5-5",
        "ownerName": "Anthropic",
        "overallScore": "79.1"
      },
      {
        "modelName": "MTFin-Qwen3.8-V2",
        "ownerName": "美团金融大模型应用中心",
        "overallScore": "76.0"
      },
      {
        "modelName": "Dowsure-Fin-27B-V1",
        "ownerName": "Dowsure",
        "overallScore": "76.0"
      },
      {
        "modelName": "qwen3.8-max",
        "ownerName": "Alibaba",
        "overallScore": "74.9"
      }
    ],
    "agent": [
      {
        "modelName": "gpt-5.6-sol",
        "ownerName": "OpenAI",
        "overallScore": "78.1"
      },
      {
        "modelName": "kimi-k3",
        "ownerName": "Moonshot",
        "overallScore": "69.3"
      },
      {
        "modelName": "qwen3.8-max",
        "ownerName": "Alibaba",
        "overallScore": "63.0"
      },
      {
        "modelName": "doubao-seed-2-1-pro-260628",
        "ownerName": "ByteDance",
        "overallScore": "60.2"
      },
      {
        "modelName": "gemini-3.1-pro-preview",
        "ownerName": "Google",
        "overallScore": "54.3"
      },
      {
        "modelName": "deepseek-v4-pro",
        "ownerName": "DeepSeek",
        "overallScore": "52.7"
      }
    ]
  },
  "groups": {
    "llm": [
      {
        "id": "1",
        "name": "金融专业知识问答",
        "items": [
          {
            "id": "LLM_1",
            "name": "金融基础知识",
            "code": "Fin_Basics",
            "type": "自建数据集",
            "updated": "2025-12-22",
            "likes": 5,
            "views": 1282
          },
          {
            "id": "LLM_2",
            "name": "资格认证考试",
            "code": "Fin_Cert_Exams",
            "type": "自建数据集",
            "updated": "2025-12-22",
            "likes": 0,
            "views": 505
          }
        ]
      },
      {
        "id": "2",
        "name": "金融业务理解与分析",
        "items": [
          {
            "id": "LLM_3",
            "name": "金融信息抽取",
            "code": "Fin_Info_Extract",
            "type": "公开数据集",
            "updated": "2025-12-22",
            "likes": 3,
            "views": 664
          },
          {
            "id": "LLM_4",
            "name": "金融报告解读",
            "code": "Fin_Report_Parse",
            "type": "自建数据集",
            "updated": "2025-12-22",
            "likes": 1,
            "views": 437
          },
          {
            "id": "LLM_15",
            "name": "金融文本一致性核查",
            "code": "Fin_Reason_Consistency",
            "type": "自建数据集",
            "updated": "2026-11-02",
            "likes": 0,
            "views": 69
          },
          {
            "id": "LLM_16",
            "name": "金融研报分析",
            "code": "Fin_Reason_Insight",
            "type": "自建数据集",
            "updated": "2026-11-02",
            "likes": 0,
            "views": 56
          }
        ]
      },
      {
        "id": "3",
        "name": "金融事实推理与计算",
        "items": [
          {
            "id": "LLM_6",
            "name": "金融研报分析",
            "code": "Fin_Reason_Insight",
            "type": "公开数据集",
            "updated": "2025-12-22",
            "likes": 3,
            "views": 419
          },
          {
            "id": "LLM_7",
            "name": "信用评估",
            "code": "Credit_Score",
            "type": "自建数据集",
            "updated": "2025-12-22",
            "likes": 1,
            "views": 385
          },
          {
            "id": "LLM_8",
            "name": "量化投资",
            "code": "Quant_Invest",
            "type": "公开数据集",
            "updated": "2025-12-22",
            "likes": 3,
            "views": 282
          },
          {
            "id": "LLM_9",
            "name": "贷款分析",
            "code": "Loan_Analysis",
            "type": "公开数据集",
            "updated": "2025-12-22",
            "likes": 2,
            "views": 315
          },
          {
            "id": "LLM_10",
            "name": "欺诈检测",
            "code": "BankAccount_Fraud_Detect",
            "type": "自建数据集",
            "updated": "2025-12-22",
            "likes": 1,
            "views": 314
          },
          {
            "id": "LLM_17",
            "name": "金融数值检索对齐",
            "code": "Fin_Reason_Align",
            "type": "自建数据集",
            "updated": "2026-11-02",
            "likes": 0,
            "views": 83
          }
        ]
      },
      {
        "id": "4",
        "name": "金融合规与风险控制",
        "items": [
          {
            "id": "LLM_11",
            "name": "金融数值计算",
            "code": "Fin_Num_Calc",
            "type": "自建数据集",
            "updated": "2025-12-22",
            "likes": 1,
            "views": 499
          },
          {
            "id": "LLM_12",
            "name": "金融数值检索对齐",
            "code": "Fin_Reason_Align",
            "type": "自建数据集",
            "updated": "2025-12-22",
            "likes": 0,
            "views": 373
          }
        ]
      },
      {
        "id": "5",
        "name": "金融内生与应用安全",
        "items": [
          {
            "id": "LLM_13",
            "name": "金融合规审查",
            "code": "Fin_Compliance",
            "type": "自建数据集",
            "updated": "2025-12-22",
            "likes": 0,
            "views": 375
          },
          {
            "id": "LLM_14",
            "name": "金融风险控制",
            "code": "Fin_Risk_Ctrl",
            "type": "自建数据集",
            "updated": "2025-12-22",
            "likes": 1,
            "views": 333
          }
        ]
      }
    ],
    "agent": [
      {
        "id": "6",
        "name": "证据化投研与尽调",
        "items": [
          {
            "id": "Agent_13",
            "name": "披露核验与证据追溯",
            "code": "Research_Disclosure_Verification",
            "type": "自建数据集",
            "updated": "2026-11-02",
            "likes": 1,
            "views": 55
          },
          {
            "id": "Agent_14",
            "name": "财务比较与口径分析",
            "code": "Research_Comparative_Analysis",
            "type": "自建数据集",
            "updated": "2026-11-02",
            "likes": 0,
            "views": 23
          },
          {
            "id": "Agent_15",
            "name": "事件研究与冲突研判",
            "code": "Research_Event_Analysis",
            "type": "自建数据集",
            "updated": "2026-11-02",
            "likes": 0,
            "views": 17
          }
        ]
      },
      {
        "id": "7",
        "name": "财务分析与模型维护",
        "items": [
          {
            "id": "Agent_16",
            "name": "历史填充与模型更新",
            "code": "Financial_Model_Update",
            "type": "自建数据集",
            "updated": "2026-11-02",
            "likes": 0,
            "views": 21
          },
          {
            "id": "Agent_17",
            "name": "财务预测与估值建模",
            "code": "Financial_Modeling_Valuation",
            "type": "自建数据集",
            "updated": "2026-11-02",
            "likes": 0,
            "views": 25
          },
          {
            "id": "Agent_18",
            "name": "模型审计与缺陷修复",
            "code": "Financial_Model_Audit_Repair",
            "type": "自建数据集",
            "updated": "2026-11-02",
            "likes": 0,
            "views": 14
          }
        ]
      },
      {
        "id": "8",
        "name": "银行业务与合规管控",
        "items": [
          {
            "id": "Agent_19",
            "name": "企业尽调与授信决策",
            "code": "Bank_Due_Diligence",
            "type": "自建数据集",
            "updated": "2026-11-02",
            "likes": 0,
            "views": 20
          },
          {
            "id": "Agent_20",
            "name": "账户服务与支付执行",
            "code": "Bank_Account_Payment_Execution",
            "type": "自建数据集",
            "updated": "2026-11-02",
            "likes": 0,
            "views": 20
          },
          {
            "id": "Agent_21",
            "name": "交易调查与风险处置",
            "code": "Bank_Transaction_Investigation",
            "type": "自建数据集",
            "updated": "2026-11-02",
            "likes": 0,
            "views": 13
          }
        ]
      },
      {
        "id": "9",
        "name": "量化投资与组合管理",
        "items": [
          {
            "id": "Agent_22",
            "name": "因子挖掘与信号检验",
            "code": "Quant_Factor_Discovery",
            "type": "自建数据集",
            "updated": "2026-11-02",
            "likes": 0,
            "views": 28
          },
          {
            "id": "Agent_23",
            "name": "收益预测与模型构建",
            "code": "Quant_Model_Construction",
            "type": "自建数据集",
            "updated": "2026-11-02",
            "likes": 0,
            "views": 17
          },
          {
            "id": "Agent_24",
            "name": "策略生成与组合管理",
            "code": "Quant_Strategy_Generation",
            "type": "自建数据集",
            "updated": "2026-11-02",
            "likes": 0,
            "views": 17
          }
        ]
      }
    ]
  },
  "pay": [
    {
      "id": "1",
      "name": "金融支付知识掌握",
      "code": "Knowledge Mastery",
      "keywords": [
        "支付术语",
        "监管规范",
        "风险合规",
        "产品规则"
      ],
      "topics": [
        "金融支付基础与行业认知知识掌握",
        "监管法规与标准规范知识掌握",
        "风险合规与安全管理知识掌握",
        "支付产品与服务规则知识掌握"
      ],
      "scores": {
        "columns": [
          {
            "key": "rank",
            "label": "排名"
          },
          {
            "key": "modelName",
            "label": "模型名称"
          },
          {
            "key": "ownerName",
            "label": "组织/团队"
          },
          {
            "key": "sourceType",
            "label": "类型"
          },
          {
            "key": "parametersScale",
            "label": "参数量"
          },
          {
            "key": "overallScore",
            "label": "综合得分"
          },
          {
            "key": "payBasicsIndustryDim",
            "label": "金融支付基础与行业认知知识掌握"
          },
          {
            "key": "regulatoryStandardsDim",
            "label": "监管法规与标准规范知识掌握"
          },
          {
            "key": "riskComplianceSecurityDim",
            "label": "风险合规与安全管理知识掌握"
          },
          {
            "key": "paymentProductServiceRulesDim",
            "label": "支付产品与服务规则知识掌握"
          }
        ],
        "rows": [
          {
            "rank": 1,
            "modelName": "Claude-Opus-4.8",
            "ownerName": "Anthropic",
            "sourceType": 2,
            "parametersScale": "N/A",
            "scores": {
              "overallScore": 76.6,
              "payBasicsIndustryDim": 80.0,
              "paymentProductServiceRulesDim": 72.4,
              "regulatoryStandardsDim": 74.8,
              "riskComplianceSecurityDim": 71.4
            }
          },
          {
            "rank": 2,
            "modelName": "GPT-5.5",
            "ownerName": "OpenAI",
            "sourceType": 2,
            "parametersScale": "N/A",
            "scores": {
              "overallScore": 76.6,
              "payBasicsIndustryDim": 81.9,
              "paymentProductServiceRulesDim": 71.3,
              "regulatoryStandardsDim": 73.2,
              "riskComplianceSecurityDim": 67.9
            }
          },
          {
            "rank": 3,
            "modelName": "PaySage1.0-Flash",
            "ownerName": "中国银联-阿里云联合团队",
            "sourceType": 2,
            "parametersScale": "27B",
            "scores": {
              "overallScore": 73.7,
              "payBasicsIndustryDim": 77.7,
              "paymentProductServiceRulesDim": 73.6,
              "regulatoryStandardsDim": 68.5,
              "riskComplianceSecurityDim": 67.9
            }
          },
          {
            "rank": 4,
            "modelName": "Doubao-Seed-2.0-Pro",
            "ownerName": "字节跳动",
            "sourceType": 2,
            "parametersScale": "N/A",
            "scores": {
              "overallScore": 72.4,
              "payBasicsIndustryDim": 79.1,
              "paymentProductServiceRulesDim": 70.1,
              "regulatoryStandardsDim": 64.6,
              "riskComplianceSecurityDim": 64.3
            }
          },
          {
            "rank": 5,
            "modelName": "Gemini-3.5-Flash",
            "ownerName": "谷歌",
            "sourceType": 2,
            "parametersScale": "N/A",
            "scores": {
              "overallScore": 71.3,
              "payBasicsIndustryDim": 72.1,
              "paymentProductServiceRulesDim": 69.0,
              "regulatoryStandardsDim": 73.2,
              "riskComplianceSecurityDim": 64.3
            }
          },
          {
            "rank": 6,
            "modelName": "Kimi-K2.6",
            "ownerName": "月之暗面",
            "sourceType": 1,
            "parametersScale": "1T-A32B",
            "scores": {
              "overallScore": 70.2,
              "payBasicsIndustryDim": 76.7,
              "paymentProductServiceRulesDim": 66.7,
              "regulatoryStandardsDim": 64.6,
              "riskComplianceSecurityDim": 57.1
            }
          },
          {
            "rank": 7,
            "modelName": "GLM-5.1",
            "ownerName": "智谱",
            "sourceType": 1,
            "parametersScale": "744B-A40B",
            "scores": {
              "overallScore": 69.6,
              "payBasicsIndustryDim": 73.0,
              "paymentProductServiceRulesDim": 70.1,
              "regulatoryStandardsDim": 64.6,
              "riskComplianceSecurityDim": 64.3
            }
          },
          {
            "rank": 8,
            "modelName": "Qwen3.6-27B",
            "ownerName": "阿里",
            "sourceType": 1,
            "parametersScale": "27B",
            "scores": {
              "overallScore": 68.7,
              "payBasicsIndustryDim": 72.6,
              "paymentProductServiceRulesDim": 66.7,
              "regulatoryStandardsDim": 65.4,
              "riskComplianceSecurityDim": 60.7
            }
          },
          {
            "rank": 9,
            "modelName": "Intern-S2-Preview",
            "ownerName": "上海人工智能实验室",
            "sourceType": 1,
            "parametersScale": "35B",
            "scores": {
              "overallScore": 68.5,
              "payBasicsIndustryDim": 72.6,
              "paymentProductServiceRulesDim": 66.7,
              "regulatoryStandardsDim": 64.6,
              "riskComplianceSecurityDim": 60.7
            }
          },
          {
            "rank": 10,
            "modelName": "DeepSeek-V4-Pro",
            "ownerName": "深度求索",
            "sourceType": 1,
            "parametersScale": "1.6T-A49B",
            "scores": {
              "overallScore": 67.0,
              "payBasicsIndustryDim": 74.4,
              "paymentProductServiceRulesDim": 62.1,
              "regulatoryStandardsDim": 59.1,
              "riskComplianceSecurityDim": 60.7
            }
          },
          {
            "rank": 11,
            "modelName": "PaySage1.0-Turbo",
            "ownerName": "中国银联-上海人工智能实验室联合团队",
            "sourceType": 2,
            "parametersScale": "35B",
            "scores": {
              "overallScore": 64.8,
              "payBasicsIndustryDim": 68.8,
              "paymentProductServiceRulesDim": 63.2,
              "regulatoryStandardsDim": 58.3,
              "riskComplianceSecurityDim": 67.9
            }
          },
          {
            "rank": 12,
            "modelName": "MiniMax-M2.7",
            "ownerName": "稀宇科技",
            "sourceType": 1,
            "parametersScale": "230B-A10B",
            "scores": {
              "overallScore": 58.4,
              "payBasicsIndustryDim": 62.3,
              "paymentProductServiceRulesDim": 62.1,
              "regulatoryStandardsDim": 51.2,
              "riskComplianceSecurityDim": 50.0
            }
          }
        ],
        "dimensions": [],
        "updated": ""
      }
    },
    {
      "id": "2",
      "name": "金融支付场景理解",
      "code": "Scenario Understanding",
      "keywords": [
        "场景识别",
        "意图识别",
        "要素抽取",
        "结构化解析",
        "业务辅助"
      ],
      "topics": [
        "支付场景与用户意图识别",
        "场景化业务执行能力"
      ],
      "scores": {
        "columns": [
          {
            "key": "rank",
            "label": "排名"
          },
          {
            "key": "modelName",
            "label": "模型名称"
          },
          {
            "key": "ownerName",
            "label": "组织/团队"
          },
          {
            "key": "sourceType",
            "label": "类型"
          },
          {
            "key": "parametersScale",
            "label": "参数量"
          },
          {
            "key": "overallScore",
            "label": "综合得分"
          },
          {
            "key": "sceneUserIntentDim",
            "label": "支付场景与用户意图识别"
          },
          {
            "key": "scenarioBizExecutionDim",
            "label": "场景化业务执行能力"
          }
        ],
        "rows": [
          {
            "rank": 1,
            "modelName": "PaySage1.0-Flash",
            "ownerName": "中国银联-阿里云联合团队",
            "sourceType": 2,
            "parametersScale": "27B",
            "scores": {
              "overallScore": 91.3,
              "scenarioBizExecutionDim": 97.1,
              "sceneUserIntentDim": 87.8
            }
          },
          {
            "rank": 2,
            "modelName": "Doubao-Seed-2.0-Pro",
            "ownerName": "字节跳动",
            "sourceType": 2,
            "parametersScale": "N/A",
            "scores": {
              "overallScore": 81.5,
              "scenarioBizExecutionDim": 87.0,
              "sceneUserIntentDim": 78.2
            }
          },
          {
            "rank": 3,
            "modelName": "Gemini-3.5-Flash",
            "ownerName": "谷歌",
            "sourceType": 2,
            "parametersScale": "N/A",
            "scores": {
              "overallScore": 81.4,
              "scenarioBizExecutionDim": 87.7,
              "sceneUserIntentDim": 77.6
            }
          },
          {
            "rank": 4,
            "modelName": "GPT-5.5",
            "ownerName": "OpenAI",
            "sourceType": 2,
            "parametersScale": "N/A",
            "scores": {
              "overallScore": 81.3,
              "scenarioBizExecutionDim": 93.5,
              "sceneUserIntentDim": 73.9
            }
          },
          {
            "rank": 5,
            "modelName": "Kimi-K2.6",
            "ownerName": "月之暗面",
            "sourceType": 1,
            "parametersScale": "1T-A32B",
            "scores": {
              "overallScore": 80.7,
              "scenarioBizExecutionDim": 87.3,
              "sceneUserIntentDim": 76.7
            }
          },
          {
            "rank": 6,
            "modelName": "GLM-5.1",
            "ownerName": "智谱",
            "sourceType": 1,
            "parametersScale": "744B-A40B",
            "scores": {
              "overallScore": 79.4,
              "scenarioBizExecutionDim": 88.8,
              "sceneUserIntentDim": 73.6
            }
          },
          {
            "rank": 7,
            "modelName": "DeepSeek-V4-Pro",
            "ownerName": "深度求索",
            "sourceType": 1,
            "parametersScale": "1.6T-A49B",
            "scores": {
              "overallScore": 79.2,
              "scenarioBizExecutionDim": 83.0,
              "sceneUserIntentDim": 77.0
            }
          },
          {
            "rank": 8,
            "modelName": "Qwen3.6-27B",
            "ownerName": "阿里",
            "sourceType": 1,
            "parametersScale": "27B",
            "scores": {
              "overallScore": 78.7,
              "scenarioBizExecutionDim": 83.0,
              "sceneUserIntentDim": 76.2
            }
          },
          {
            "rank": 9,
            "modelName": "Claude-Opus-4.8",
            "ownerName": "Anthropic",
            "sourceType": 2,
            "parametersScale": "N/A",
            "scores": {
              "overallScore": 78.0,
              "scenarioBizExecutionDim": 84.8,
              "sceneUserIntentDim": 73.9
            }
          },
          {
            "rank": 10,
            "modelName": "PaySage1.0-Turbo",
            "ownerName": "中国银联-上海人工智能实验室联合团队",
            "sourceType": 2,
            "parametersScale": "35B",
            "scores": {
              "overallScore": 76.7,
              "scenarioBizExecutionDim": 83.7,
              "sceneUserIntentDim": 72.5
            }
          },
          {
            "rank": 11,
            "modelName": "MiniMax-M2.7",
            "ownerName": "稀宇科技",
            "sourceType": 1,
            "parametersScale": "230B-A10B",
            "scores": {
              "overallScore": 71.6,
              "scenarioBizExecutionDim": 80.1,
              "sceneUserIntentDim": 66.4
            }
          },
          {
            "rank": 12,
            "modelName": "Intern-S2-Preview",
            "ownerName": "上海人工智能实验室",
            "sourceType": 1,
            "parametersScale": "35B",
            "scores": {
              "overallScore": 69.3,
              "scenarioBizExecutionDim": 67.4,
              "sceneUserIntentDim": 70.5
            }
          }
        ],
        "dimensions": [],
        "updated": ""
      }
    },
    {
      "id": "3",
      "name": "金融支付逻辑推理",
      "code": "Logical Reasoning",
      "keywords": [
        "规则适用",
        "合规判断",
        "异常归因"
      ],
      "topics": [
        "合规边界与规则适用推理",
        "风险识别与异常归因推理"
      ],
      "scores": {
        "columns": [
          {
            "key": "rank",
            "label": "排名"
          },
          {
            "key": "modelName",
            "label": "模型名称"
          },
          {
            "key": "ownerName",
            "label": "组织/团队"
          },
          {
            "key": "sourceType",
            "label": "类型"
          },
          {
            "key": "parametersScale",
            "label": "参数量"
          },
          {
            "key": "overallScore",
            "label": "综合得分"
          },
          {
            "key": "complianceBoundaryRuleDim",
            "label": "合规边界与规则适用推理"
          },
          {
            "key": "riskAnomalyAttributionDim",
            "label": "风险识别与异常归因推理"
          }
        ],
        "rows": [
          {
            "rank": 1,
            "modelName": "GPT-5.5",
            "ownerName": "OpenAI",
            "sourceType": 2,
            "parametersScale": "N/A",
            "scores": {
              "complianceBoundaryRuleDim": 71.8,
              "overallScore": 70.2,
              "riskAnomalyAttributionDim": 68.0
            }
          },
          {
            "rank": 2,
            "modelName": "Claude-Opus-4.8",
            "ownerName": "Anthropic",
            "sourceType": 2,
            "parametersScale": "N/A",
            "scores": {
              "complianceBoundaryRuleDim": 61.5,
              "overallScore": 61.0,
              "riskAnomalyAttributionDim": 60.2
            }
          },
          {
            "rank": 3,
            "modelName": "Kimi-K2.6",
            "ownerName": "月之暗面",
            "sourceType": 1,
            "parametersScale": "1T-A32B",
            "scores": {
              "complianceBoundaryRuleDim": 60.7,
              "overallScore": 59.5,
              "riskAnomalyAttributionDim": 57.9
            }
          },
          {
            "rank": 4,
            "modelName": "PaySage1.0-Flash",
            "ownerName": "中国银联-阿里云联合团队",
            "sourceType": 2,
            "parametersScale": "27B",
            "scores": {
              "complianceBoundaryRuleDim": 60.5,
              "overallScore": 59.3,
              "riskAnomalyAttributionDim": 57.6
            }
          },
          {
            "rank": 5,
            "modelName": "Gemini-3.5-Flash",
            "ownerName": "谷歌",
            "sourceType": 2,
            "parametersScale": "N/A",
            "scores": {
              "complianceBoundaryRuleDim": 58.3,
              "overallScore": 57.4,
              "riskAnomalyAttributionDim": 56.2
            }
          },
          {
            "rank": 6,
            "modelName": "Doubao-Seed-2.0-Pro",
            "ownerName": "字节跳动",
            "sourceType": 2,
            "parametersScale": "N/A",
            "scores": {
              "complianceBoundaryRuleDim": 56.2,
              "overallScore": 54.7,
              "riskAnomalyAttributionDim": 52.8
            }
          },
          {
            "rank": 7,
            "modelName": "DeepSeek-V4-Pro",
            "ownerName": "深度求索",
            "sourceType": 1,
            "parametersScale": "1.6T-A49B",
            "scores": {
              "complianceBoundaryRuleDim": 55.4,
              "overallScore": 54.5,
              "riskAnomalyAttributionDim": 53.3
            }
          },
          {
            "rank": 8,
            "modelName": "GLM-5.1",
            "ownerName": "智谱",
            "sourceType": 1,
            "parametersScale": "744B-A40B",
            "scores": {
              "complianceBoundaryRuleDim": 52.5,
              "overallScore": 51.2,
              "riskAnomalyAttributionDim": 49.5
            }
          },
          {
            "rank": 9,
            "modelName": "Qwen3.6-27B",
            "ownerName": "阿里",
            "sourceType": 1,
            "parametersScale": "27B",
            "scores": {
              "complianceBoundaryRuleDim": 47.8,
              "overallScore": 47.2,
              "riskAnomalyAttributionDim": 46.5
            }
          },
          {
            "rank": 10,
            "modelName": "Intern-S2-Preview",
            "ownerName": "上海人工智能实验室",
            "sourceType": 1,
            "parametersScale": "35B",
            "scores": {
              "complianceBoundaryRuleDim": 44.9,
              "overallScore": 46.0,
              "riskAnomalyAttributionDim": 47.4
            }
          },
          {
            "rank": 11,
            "modelName": "MiniMax-M2.7",
            "ownerName": "稀宇科技",
            "sourceType": 1,
            "parametersScale": "230B-A10B",
            "scores": {
              "complianceBoundaryRuleDim": 47.0,
              "overallScore": 45.9,
              "riskAnomalyAttributionDim": 44.4
            }
          },
          {
            "rank": 12,
            "modelName": "PaySage1.0-Turbo",
            "ownerName": "中国银联-上海人工智能实验室联合团队",
            "sourceType": 2,
            "parametersScale": "35B",
            "scores": {
              "complianceBoundaryRuleDim": 44.7,
              "overallScore": 43.3,
              "riskAnomalyAttributionDim": 41.3
            }
          }
        ],
        "dimensions": [],
        "updated": ""
      }
    },
    {
      "id": "4",
      "name": "金融支付数值计算",
      "code": "Numerical Calculation",
      "keywords": [
        "费率计费",
        "清结算",
        "资金账务",
        "经营指标"
      ],
      "topics": [
        "产品计费与权益成本计算",
        "清结算与资金账务计算",
        "经营风险指标与模型计算"
      ],
      "scores": {
        "columns": [
          {
            "key": "rank",
            "label": "排名"
          },
          {
            "key": "modelName",
            "label": "模型名称"
          },
          {
            "key": "ownerName",
            "label": "组织/团队"
          },
          {
            "key": "sourceType",
            "label": "类型"
          },
          {
            "key": "parametersScale",
            "label": "参数量"
          },
          {
            "key": "overallScore",
            "label": "综合得分"
          },
          {
            "key": "productBillingCostDim",
            "label": "产品计费与权益成本计算"
          },
          {
            "key": "clearingSettlementDim",
            "label": "清结算与资金账务计算"
          },
          {
            "key": "operationalRiskMetricsDim",
            "label": "经营风险指标与模型计算"
          }
        ],
        "rows": [
          {
            "rank": 1,
            "modelName": "GPT-5.5",
            "ownerName": "OpenAI",
            "sourceType": 2,
            "parametersScale": "N/A",
            "scores": {
              "clearingSettlementDim": 76.6,
              "operationalRiskMetricsDim": 98.0,
              "overallScore": 90.2,
              "productBillingCostDim": 90.8
            }
          },
          {
            "rank": 2,
            "modelName": "PaySage1.0-Turbo",
            "ownerName": "中国银联-上海人工智能实验室联合团队",
            "sourceType": 2,
            "parametersScale": "35B",
            "scores": {
              "clearingSettlementDim": 68.8,
              "operationalRiskMetricsDim": 87.1,
              "overallScore": 84.1,
              "productBillingCostDim": 89.3
            }
          },
          {
            "rank": 3,
            "modelName": "Gemini-3.5-Flash",
            "ownerName": "谷歌",
            "sourceType": 2,
            "parametersScale": "N/A",
            "scores": {
              "clearingSettlementDim": 57.8,
              "operationalRiskMetricsDim": 94.1,
              "overallScore": 83.8,
              "productBillingCostDim": 88.6
            }
          },
          {
            "rank": 4,
            "modelName": "Kimi-K2.6",
            "ownerName": "月之暗面",
            "sourceType": 1,
            "parametersScale": "1T-A32B",
            "scores": {
              "clearingSettlementDim": 67.2,
              "operationalRiskMetricsDim": 91.1,
              "overallScore": 83.8,
              "productBillingCostDim": 86.3
            }
          },
          {
            "rank": 5,
            "modelName": "PaySage1.0-Flash",
            "ownerName": "中国银联-阿里云联合团队",
            "sourceType": 2,
            "parametersScale": "27B",
            "scores": {
              "clearingSettlementDim": 60.9,
              "operationalRiskMetricsDim": 88.1,
              "overallScore": 82.1,
              "productBillingCostDim": 87.8
            }
          },
          {
            "rank": 6,
            "modelName": "DeepSeek-V4-Pro",
            "ownerName": "深度求索",
            "sourceType": 1,
            "parametersScale": "1.6T-A49B",
            "scores": {
              "clearingSettlementDim": 60.9,
              "operationalRiskMetricsDim": 85.2,
              "overallScore": 79.1,
              "productBillingCostDim": 83.2
            }
          },
          {
            "rank": 7,
            "modelName": "Doubao-Seed-2.0-Pro",
            "ownerName": "字节跳动",
            "sourceType": 2,
            "parametersScale": "N/A",
            "scores": {
              "clearingSettlementDim": 64.1,
              "operationalRiskMetricsDim": 84.2,
              "overallScore": 78.7,
              "productBillingCostDim": 81.7
            }
          },
          {
            "rank": 8,
            "modelName": "Intern-S2-Preview",
            "ownerName": "上海人工智能实验室",
            "sourceType": 1,
            "parametersScale": "35B",
            "scores": {
              "clearingSettlementDim": 46.9,
              "operationalRiskMetricsDim": 87.1,
              "overallScore": 77.0,
              "productBillingCostDim": 84.0
            }
          },
          {
            "rank": 9,
            "modelName": "Qwen3.6-27B",
            "ownerName": "阿里",
            "sourceType": 1,
            "parametersScale": "27B",
            "scores": {
              "clearingSettlementDim": 54.7,
              "operationalRiskMetricsDim": 82.2,
              "overallScore": 76.0,
              "productBillingCostDim": 81.7
            }
          },
          {
            "rank": 10,
            "modelName": "Claude-Opus-4.8",
            "ownerName": "Anthropic",
            "sourceType": 2,
            "parametersScale": "N/A",
            "scores": {
              "clearingSettlementDim": 48.6,
              "operationalRiskMetricsDim": 79.2,
              "overallScore": 74.3,
              "productBillingCostDim": 84.7
            }
          },
          {
            "rank": 11,
            "modelName": "MiniMax-M2.7",
            "ownerName": "稀宇科技",
            "sourceType": 1,
            "parametersScale": "230B-A10B",
            "scores": {
              "clearingSettlementDim": 48.4,
              "operationalRiskMetricsDim": 87.1,
              "overallScore": 74.3,
              "productBillingCostDim": 77.1
            }
          },
          {
            "rank": 12,
            "modelName": "GLM-5.1",
            "ownerName": "智谱",
            "sourceType": 1,
            "parametersScale": "744B-A40B",
            "scores": {
              "clearingSettlementDim": 70.3,
              "operationalRiskMetricsDim": 72.3,
              "overallScore": 73.0,
              "productBillingCostDim": 74.8
            }
          }
        ],
        "dimensions": [],
        "updated": ""
      }
    },
    {
      "id": "5",
      "name": "金融支付工具调用",
      "code": "Tool Calling",
      "keywords": [
        "工具选择",
        "参数构造",
        "多工具协同",
        "结果核验"
      ],
      "topics": [],
      "scores": {
        "columns": [
          {
            "key": "rank",
            "label": "排名"
          },
          {
            "key": "modelName",
            "label": "模型名称"
          },
          {
            "key": "ownerName",
            "label": "组织/团队"
          },
          {
            "key": "sourceType",
            "label": "类型"
          },
          {
            "key": "parametersScale",
            "label": "参数量"
          },
          {
            "key": "overallScore",
            "label": "综合得分"
          }
        ],
        "rows": [
          {
            "rank": 1,
            "modelName": "PaySage1.0-Turbo",
            "ownerName": "中国银联-上海人工智能实验室联合团队",
            "sourceType": 2,
            "parametersScale": "35B",
            "scores": {
              "overallScore": 86.0
            }
          },
          {
            "rank": 2,
            "modelName": "Qwen3.6-27B",
            "ownerName": "阿里",
            "sourceType": 1,
            "parametersScale": "27B",
            "scores": {
              "overallScore": 79.0
            }
          },
          {
            "rank": 3,
            "modelName": "Gemini-3.5-Flash",
            "ownerName": "谷歌",
            "sourceType": 2,
            "parametersScale": "N/A",
            "scores": {
              "overallScore": 77.5
            }
          },
          {
            "rank": 4,
            "modelName": "PaySage1.0-Flash",
            "ownerName": "中国银联-阿里云联合团队",
            "sourceType": 2,
            "parametersScale": "27B",
            "scores": {
              "overallScore": 73.0
            }
          },
          {
            "rank": 5,
            "modelName": "Doubao-Seed-2.0-Pro",
            "ownerName": "字节跳动",
            "sourceType": 2,
            "parametersScale": "N/A",
            "scores": {
              "overallScore": 68.5
            }
          },
          {
            "rank": 6,
            "modelName": "GLM-5.1",
            "ownerName": "智谱",
            "sourceType": 1,
            "parametersScale": "744B-A40B",
            "scores": {
              "overallScore": 67.5
            }
          },
          {
            "rank": 7,
            "modelName": "MiniMax-M2.7",
            "ownerName": "稀宇科技",
            "sourceType": 1,
            "parametersScale": "230B-A10B",
            "scores": {
              "overallScore": 64.5
            }
          },
          {
            "rank": 8,
            "modelName": "DeepSeek-V4-Pro",
            "ownerName": "深度求索",
            "sourceType": 1,
            "parametersScale": "1.6T-A49B",
            "scores": {
              "overallScore": 63.5
            }
          },
          {
            "rank": 9,
            "modelName": "Kimi-K2.6",
            "ownerName": "月之暗面",
            "sourceType": 1,
            "parametersScale": "1T-A32B",
            "scores": {
              "overallScore": 60.0
            }
          },
          {
            "rank": 10,
            "modelName": "Claude-Opus-4.8",
            "ownerName": "Anthropic",
            "sourceType": 2,
            "parametersScale": "N/A",
            "scores": {
              "overallScore": 55.0
            }
          },
          {
            "rank": 11,
            "modelName": "Intern-S2-Preview",
            "ownerName": "上海人工智能实验室",
            "sourceType": 1,
            "parametersScale": "35B",
            "scores": {
              "overallScore": 54.5
            }
          },
          {
            "rank": 12,
            "modelName": "GPT-5.5",
            "ownerName": "OpenAI",
            "sourceType": 2,
            "parametersScale": "N/A",
            "scores": {
              "overallScore": 40.0
            }
          }
        ],
        "dimensions": [],
        "updated": ""
      }
    },
    {
      "id": "6",
      "name": "安全可信",
      "code": "Security & Trust",
      "keywords": [
        "合规输出",
        "可靠审慎",
        "风险提示",
        "边界控制"
      ],
      "topics": [],
      "scores": {
        "columns": [
          {
            "key": "rank",
            "label": "排名"
          },
          {
            "key": "modelName",
            "label": "模型名称"
          },
          {
            "key": "ownerName",
            "label": "组织/团队"
          },
          {
            "key": "sourceType",
            "label": "类型"
          },
          {
            "key": "parametersScale",
            "label": "参数量"
          },
          {
            "key": "overallScore",
            "label": "综合得分"
          }
        ],
        "rows": [
          {
            "rank": 1,
            "modelName": "GPT-5.5",
            "ownerName": "OpenAI",
            "sourceType": 2,
            "parametersScale": "N/A",
            "scores": {
              "overallScore": 70.2
            }
          },
          {
            "rank": 2,
            "modelName": "Claude-Opus-4.8",
            "ownerName": "Anthropic",
            "sourceType": 2,
            "parametersScale": "N/A",
            "scores": {
              "overallScore": 69.5
            }
          },
          {
            "rank": 3,
            "modelName": "PaySage1.0-Turbo",
            "ownerName": "中国银联-上海人工智能实验室联合团队",
            "sourceType": 2,
            "parametersScale": "35B",
            "scores": {
              "overallScore": 56.7
            }
          },
          {
            "rank": 4,
            "modelName": "Intern-S2-Preview",
            "ownerName": "上海人工智能实验室",
            "sourceType": 1,
            "parametersScale": "35B",
            "scores": {
              "overallScore": 44.5
            }
          },
          {
            "rank": 5,
            "modelName": "GLM-5.1",
            "ownerName": "智谱",
            "sourceType": 1,
            "parametersScale": "744B-A40B",
            "scores": {
              "overallScore": 40.6
            }
          },
          {
            "rank": 6,
            "modelName": "MiniMax-M2.7",
            "ownerName": "稀宇科技",
            "sourceType": 1,
            "parametersScale": "230B-A10B",
            "scores": {
              "overallScore": 39.5
            }
          },
          {
            "rank": 7,
            "modelName": "PaySage1.0-Flash",
            "ownerName": "中国银联-阿里云联合团队",
            "sourceType": 2,
            "parametersScale": "27B",
            "scores": {
              "overallScore": 37.8
            }
          },
          {
            "rank": 8,
            "modelName": "Kimi-K2.6",
            "ownerName": "月之暗面",
            "sourceType": 1,
            "parametersScale": "1T-A32B",
            "scores": {
              "overallScore": 34.1
            }
          },
          {
            "rank": 9,
            "modelName": "Gemini-3.5-Flash",
            "ownerName": "谷歌",
            "sourceType": 2,
            "parametersScale": "N/A",
            "scores": {
              "overallScore": 27.4
            }
          },
          {
            "rank": 10,
            "modelName": "Qwen3.6-27B",
            "ownerName": "阿里",
            "sourceType": 1,
            "parametersScale": "27B",
            "scores": {
              "overallScore": 26.9
            }
          },
          {
            "rank": 11,
            "modelName": "DeepSeek-V4-Pro",
            "ownerName": "深度求索",
            "sourceType": 1,
            "parametersScale": "1.6T-A49B",
            "scores": {
              "overallScore": 22.4
            }
          },
          {
            "rank": 12,
            "modelName": "Doubao-Seed-2.0-Pro",
            "ownerName": "字节跳动",
            "sourceType": 2,
            "parametersScale": "N/A",
            "scores": {
              "overallScore": 21.2
            }
          }
        ],
        "dimensions": [],
        "updated": ""
      }
    }
  ],
  "payUnits": [
    "上海人工智能实验室",
    "中国银联股份有限公司",
    "阿里云计算有限公司"
  ],
  "payOptions": {
    "ownerType": [
      "模型研发团队 / 实验室",
      "金融机构 / 支付机构",
      "技术服务商",
      "高校 / 科研机构",
      "其他"
    ],
    "sourceType": [
      "开源",
      "闭源"
    ],
    "modelType": [
      "通用大模型",
      "金融垂直模型",
      "多模态模型",
      "其他"
    ]
  },
  "local": {
    "version": "1.0.0",
    "tasks": [
      {
        "id": "1.1",
        "name": "金融知识与规则",
        "records": 322042,
        "core": 100,
        "metric": "accuracy_or_em",
        "inputFields": [
          "id",
          "capability_id",
          "task",
          "language",
          "question",
          "options",
          "metadata"
        ],
        "predictionFields": [
          "prediction"
        ],
        "metrics": [
          "accuracy_or_em",
          "set_f1"
        ]
      },
      {
        "id": "1.2",
        "name": "金融文本理解与抽取",
        "records": 45000,
        "core": 100,
        "metric": "strict_span_micro_f1",
        "inputFields": [
          "id",
          "capability_id",
          "task",
          "text"
        ],
        "predictionFields": [
          "annotations"
        ],
        "metrics": [
          "strict_span_micro_f1"
        ]
      },
      {
        "id": "1.3",
        "name": "嵌入与重排序",
        "records": 16000,
        "core": 100,
        "metric": "average_precision",
        "inputFields": [
          "id",
          "capability_id",
          "task",
          "query",
          "document",
          "pair_type",
          "domain"
        ],
        "predictionFields": [
          "score"
        ],
        "metrics": [
          "average_precision",
          "roc_auc",
          "pair_accuracy"
        ]
      },
      {
        "id": "2.1",
        "name": "生成披露",
        "records": 11691,
        "core": 100,
        "metric": "key_information_f1",
        "inputFields": [
          "id",
          "capability_id",
          "task",
          "subtask",
          "language",
          "question",
          "context"
        ],
        "predictionFields": [
          "prediction",
          "claims"
        ],
        "metrics": [
          "key_information_f1",
          "fact_support_rate",
          "unsupported_claim_rate",
          "rouge_l_f1"
        ]
      },
      {
        "id": "2.2",
        "name": "事实一致性",
        "records": 11000,
        "core": 100,
        "metric": "macro_f1",
        "inputFields": [
          "id",
          "capability_id",
          "task",
          "subtask",
          "language",
          "evidence_text",
          "candidate_answer"
        ],
        "predictionFields": [
          "label",
          "error_span",
          "evidence_span"
        ],
        "metrics": [
          "macro_f1",
          "accuracy"
        ]
      },
      {
        "id": "2.3",
        "name": "可解释审计",
        "records": 31683,
        "core": 100,
        "metric": "audit_score",
        "inputFields": [
          "id",
          "capability_id",
          "task",
          "subtask",
          "language",
          "question",
          "context"
        ],
        "predictionFields": [
          "answer",
          "citations",
          "calculation_steps"
        ],
        "metrics": [
          "audit_score",
          "answer_correctness",
          "evidence_f1"
        ]
      },
      {
        "id": "3.1",
        "name": "时效动态",
        "records": 922,
        "core": 100,
        "metric": "macro_subtask_accuracy",
        "inputFields": [
          "id",
          "capability_id",
          "task",
          "subtask",
          "language",
          "question",
          "context",
          "metadata"
        ],
        "predictionFields": [
          "prediction",
          "unit"
        ],
        "metrics": [
          "macro_subtask_accuracy"
        ]
      },
      {
        "id": "3.2",
        "name": "鲁棒对抗",
        "records": 900,
        "core": 100,
        "metric": "accuracy_drop",
        "inputFields": [
          "id",
          "capability_id",
          "task",
          "perturbation_type",
          "group_id",
          "language",
          "question",
          "options"
        ],
        "predictionFields": [
          "prediction",
          "answer_text"
        ],
        "metrics": [
          "accuracy_drop",
          "conditional_asr",
          "semantic_consistency"
        ]
      },
      {
        "id": "3.3",
        "name": "多语言跨准则",
        "records": 10000,
        "core": 100,
        "metric": "semantic_token_f1",
        "inputFields": [
          "id",
          "capability_id",
          "task",
          "language_pair",
          "question"
        ],
        "predictionFields": [
          "prediction"
        ],
        "metrics": [
          "semantic_token_f1",
          "number_preservation_f1"
        ]
      },
      {
        "id": "4.1",
        "name": "视觉与表格版面理解",
        "records": 100000,
        "core": 100,
        "metric": "answer_accuracy",
        "inputFields": [
          "id",
          "capability_id",
          "task",
          "table_id",
          "image_path",
          "question"
        ],
        "predictionFields": [
          "prediction"
        ],
        "metrics": [
          "answer_accuracy",
          "table_all_correct"
        ]
      },
      {
        "id": "5.1",
        "name": "财报计算",
        "records": 32859,
        "core": 100,
        "metric": "macro_by_source",
        "inputFields": [
          "id",
          "capability_id",
          "source_dataset",
          "task",
          "subtask",
          "language",
          "question",
          "context",
          "metadata"
        ],
        "predictionFields": [
          "answer",
          "scale",
          "program",
          "evidence"
        ],
        "metrics": [
          "macro_by_source",
          "answer_accuracy",
          "program_accuracy"
        ]
      },
      {
        "id": "5.2",
        "name": "多轮金融推理",
        "records": 3500,
        "core": 100,
        "metric": "dialogue_success_rate",
        "inputFields": [
          "id",
          "capability_id",
          "task",
          "language",
          "context",
          "user_turns",
          "turn_count"
        ],
        "predictionFields": [
          "turns"
        ],
        "metrics": [
          "dialogue_success_rate",
          "turn_accuracy"
        ]
      },
      {
        "id": "5.3",
        "name": "长文档与证据检索",
        "records": 6000,
        "core": 100,
        "metric": "joint_success",
        "inputFields": [
          "id",
          "capability_id",
          "task",
          "document_id",
          "question"
        ],
        "predictionFields": [
          "answer",
          "retrieved_ids",
          "citations"
        ],
        "metrics": [
          "joint_success",
          "recall_at_10",
          "mrr_at_10"
        ]
      },
      {
        "id": "6.1",
        "name": "决策与工具使用",
        "records": 1000,
        "core": 100,
        "metric": "end_to_end_success",
        "inputFields": [
          "id",
          "capability_id",
          "task",
          "instruction",
          "tools",
          "calculation_inputs",
          "tool_context",
          "context_status",
          "rule_text"
        ],
        "predictionFields": [
          "answer",
          "tool_calls"
        ],
        "metrics": [
          "end_to_end_success",
          "tool_selection_accuracy",
          "argument_schema_validity"
        ]
      },
      {
        "id": "6.2",
        "name": "财务异常图",
        "records": 49911,
        "core": 100,
        "metric": "average_precision",
        "inputFields": [
          "company_id",
          "year",
          "features",
          "mda",
          "edges_visible_through_year"
        ],
        "predictionFields": [
          "anomaly_probability",
          "label"
        ],
        "metrics": [
          "average_precision",
          "roc_auc",
          "recall_at_top_5pct"
        ]
      },
      {
        "id": "6.3",
        "name": "RAG Agent",
        "records": 2000,
        "core": 100,
        "metric": "end_to_end_success",
        "inputFields": [
          "id",
          "capability_id",
          "task",
          "query",
          "available_tools"
        ],
        "predictionFields": [
          "answer",
          "citations",
          "tool_calls"
        ],
        "metrics": [
          "end_to_end_success",
          "evidence_recall_at_10",
          "tool_success"
        ]
      },
      {
        "id": "7.1",
        "name": "安全合规",
        "records": 6000,
        "core": 100,
        "metric": "macro_f1",
        "inputFields": [
          "id",
          "capability_id",
          "task",
          "domain",
          "scenario",
          "options",
          "evidence"
        ],
        "predictionFields": [
          "action",
          "prediction",
          "evidence_quote"
        ],
        "metrics": [
          "macro_f1",
          "dangerous_allow_rate"
        ]
      },
      {
        "id": "7.2",
        "name": "风险决策",
        "records": 220000,
        "core": 100,
        "metric": "average_precision",
        "inputFields": [
          "id",
          "capability_id",
          "task",
          "subject_id",
          "observation_time",
          "risk_view",
          "features",
          "question"
        ],
        "predictionFields": [
          "review_probability",
          "label",
          "action"
        ],
        "metrics": [
          "average_precision",
          "roc_auc",
          "recall_at_top_5pct"
        ]
      }
    ]
  }
};
