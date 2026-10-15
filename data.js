// Edit this file to update content. Application logic lives in script.js.
const DATA = {
labs: [
 {name:"Excel Daily Lab",url:"https://neetikacodes.github.io/excel-daily-lab/",btn:"Explore Excel Daily Lab",icon:"📗",color:"var(--xl)",desc:"Learn Excel formulas, data cleaning, business calculations, reporting, and practical spreadsheet analysis.",tags:["Formulas","Data cleaning","Reporting"]},
 {name:"SQL Daily Lab",url:"https://neetikacodes.github.io/sql-daily-lab/",btn:"Explore SQL Daily Lab",icon:"🗄️",color:"var(--sq)",desc:"Learn SQL concepts, database queries, joins, aggregations, and how to solve real business data problems.",tags:["Queries","Joins","Aggregations"]},
 {name:"Power BI Daily Lab",url:"https://neetikacodes.github.io/powerbi-daily-lab/",btn:"Explore Power BI Daily Lab",icon:"📊",color:"var(--pb)",desc:"Learn Power BI, Power Query, data modelling, DAX, KPIs, dashboard design, and business intelligence through practical case studies.",tags:["Power Query","DAX","Dashboards"]}
],
roles: [
 {name:"Business Analyst",color:"var(--ba)",summary:"Helps an organisation clarify a business problem, gather requirements, improve processes and check that a solution meets stakeholder needs.",example:"Delayed deliveries: define success criteria, interview stakeholders, map the order-to-delivery process, find bottlenecks, document requirements, define acceptance criteria, support testing, then measure whether delivery performance improved."},
 {name:"Data Analyst",color:"var(--da)",summary:"Turns raw data into reliable information: extracts and cleans data, checks quality, calculates KPIs, builds reports and explains what the numbers mean.",example:"Falling profit despite rising sales: agree definitions of revenue and profit, check data quality, analyse product mix, discounts, costs and returns across periods, validate findings, build a dashboard, and state limitations."}
],
compare: [
 ["", "Business Analyst", "Data Analyst"],
 ["Main purpose","Define the problem and the right solution","Find answers and insight in data"],
 ["Typical question","What should we change, and how will we know it worked?","What happened, where, and why?"],
 ["Deliverables","BRD, user stories, process maps, gap analysis, UAT scenarios","Clean datasets, SQL queries, Excel reports, dashboards, KPI reports"],
 ["Common tools","Documentation tools, diagramming, Jira/Confluence (role-specific), Excel","Excel, SQL, Power BI, sometimes Python or Tableau"],
 ["Works closely with","Business owners, operations, technical teams, testers","Managers, finance, sales, operations, data owners"],
 ["Possible progression","Senior BA, Product Owner, Consultant","Senior Analyst, BI Developer, Analytics Manager"]
],
quiz: [
 {q:"Which task sounds more interesting?",a:[["Talking to teams to understand a messy process","BA"],["Digging into a dataset to find a pattern","DA"],["Both equally","BOTH"]]},
 {q:"How do you feel about writing queries and formulas all day?",a:[["I would enjoy it","DA"],["I would rather write documents and diagrams","BA"],["A mix is fine","BOTH"]]},
 {q:"Which output would you be proudest of?",a:[["A clear requirements pack that a team can build from","BA"],["A dashboard that answers management's questions","DA"],["Either","BOTH"]]},
 {q:"Which setting suits you better?",a:[["Workshops and stakeholder discussions","BA"],["Focused time with data","DA"],["Both","BOTH"]]}
],
roadmap: [
 {weeks:"Weeks 1–2",title:"Excel fundamentals and business data",hours:"8–10 h/week",lab:0,topics:["Tables","Sorting and filtering","IF logic","SUMIFS and COUNTIFS","Lookups","Data cleaning","PivotTables"],tasks:["Clean a messy sales sheet","Build a PivotTable summary by month","Write one SUMIFS-based KPI"],outcome:"Analyse and summarise tabular business data."},
 {weeks:"Weeks 3–5",title:"SQL foundations and analytics",hours:"8–10 h/week",lab:1,topics:["SELECT and WHERE","GROUP BY and HAVING","Joins","Subqueries and CTEs","Window functions","Data-quality checks"],tasks:["Answer 10 business questions with queries","Find duplicate and null records","Join orders to customers and summarise"],outcome:"Retrieve and analyse data from relational databases."},
 {weeks:"Weeks 6–8",title:"Power BI",hours:"8–10 h/week",lab:2,topics:["Power Query","Relationships and star schema","DAX measures","KPIs","Time-based analysis","Dashboard design"],tasks:["Model a sales dataset","Create 5 DAX measures","Build a one-page KPI dashboard"],outcome:"Model data and build interactive reports."},
 {weeks:"Weeks 9–10",title:"Business and analytical problem-solving",hours:"6–8 h/week",lab:null,topics:["Clarify requirements","Define KPIs","Trend and variance analysis","Validate findings","Management summaries","Process maps and requirement documents"],tasks:["Write a one-page management summary","Draw a current-state process map","Write 5 user stories with acceptance criteria"],outcome:"Frame problems, validate results and communicate clearly."},
 {weeks:"Weeks 11–12",title:"Portfolio and interview preparation",hours:"6–8 h/week",lab:null,topics:["End-to-end projects","Project documentation","Resume","Interview practice","Reading job descriptions","Finding skill gaps"],tasks:["Publish one documented project","Compare your skills to 5 job descriptions","Explain a project aloud in 3 minutes"],outcome:"A documented project and a clear view of your skill gaps."}
],
// Salary figures: indicative only. Re-check each source and update the verified date regularly.
// A card shows numbers only when range, source, url and verified are all filled in.
// (old note) Add verified figures here. A card shows numbers only when range, source, url and verified are all filled in.
salary: [
 {role:"Business Analyst",level:"All experience levels (Glassdoor)",range:"₹6.08–13.06 lakh per year typical range (25th–75th percentile); average about ₹9 lakh",currency:"INR per year",source:"Glassdoor India",url:"https://www.glassdoor.com/Salaries/india-business-analyst-salary-SRCH_IL.0,5_IN115_KO6,22.htm",verified:"15 Oct 2026 (source data as of Aug 2026)",notes:"Based on about 49,500 anonymous submissions. Mixes all experience levels and may include additional pay. Roughly ₹75,000 per month gross at the average."},
 {role:"Business Analyst",level:"All experience levels (Indeed)",range:"About ₹9.0 lakh per year average base",currency:"INR per year",source:"Indeed India",url:"https://in.indeed.com/salaries/business-analyst-Salaries",verified:"15 Oct 2026 (source updated 8 Jun 2026)",notes:"Average base salary from about 1,300 reported salaries. Base pay only, so total CTC can be higher."},
 {role:"Business Analyst",level:"Entry / fresher",range:"₹4–7 lakh per year (indicative CTC)",currency:"INR per year",source:"Amity Online salary guide (secondary source)",url:"https://amityonline.com/blog/what-is-the-salary-of-a-business-analyst.md",verified:"15 Oct 2026 (source updated 12 Aug 2026)",notes:"Secondary source, not a primary salary database. Treat as a rough guide; IT services firms often pay at the lower end."},
 {role:"Business Analyst",level:"Senior Business Analyst",range:"About ₹13.7 lakh per year average",currency:"INR per year",source:"Indeed India",url:"https://in.indeed.com/salaries/business-analyst-Salaries",verified:"15 Oct 2026 (source updated 8 Jun 2026)",notes:"Listed on the same Indeed page as the Senior Business Analyst average."},
 {role:"Data Analyst",level:"All experience levels",range:"About ₹6.5 lakh per year average base",currency:"INR per year",source:"Indeed India",url:"https://in.indeed.com/career/data-analyst/salaries",verified:"15 Oct 2026 (source updated 12 Jul 2026)",notes:"Average base salary from about 895 reported salaries. Top-paying cities include Gurgaon and Bengaluru."},
 {role:"Data Analyst",level:"Entry / fresher",range:"₹3–8 lakh per year base; average about ₹5 lakh",currency:"INR per year",source:"Glassdoor figures as reported by Fueler (secondary source)",url:"https://fueler.io/blog/data-analyst-salary-in-india-freshers-mid-level-and-senior-roles",verified:"15 Oct 2026 (source dated 23 Aug 2026)",notes:"Secondary source quoting Glassdoor. Other 2026 benchmarks it lists put typical fresher pay around ₹3.5–6 lakh."},
 {role:"Data Analyst",level:"Senior Data Analyst",range:"About ₹11.4 lakh per year average",currency:"INR per year",source:"Indeed India",url:"https://in.indeed.com/career/data-analyst/salaries",verified:"15 Oct 2026 (source updated 12 Jul 2026)",notes:"Senior Data Analyst average listed on the same Indeed page."}
],
resources: [
 {name:"Microsoft Data Analyst career path",url:"https://learn.microsoft.com/en-us/training/career-paths/data-analyst",desc:"Microsoft Learn path covering the data analyst skill set. Check current access terms on the site."},
 {name:"Microsoft Power BI training",url:"https://learn.microsoft.com/en-us/training/powerplatform/power-bi",desc:"Microsoft Learn modules on Power BI. Check current access terms on the site."}
]
};
