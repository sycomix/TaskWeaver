"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6563],{2304:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=t(4848),s=t(8453);const r={},o="Roles in TaskWeaver",i={permalink:"/TaskWeaver/blog/role",editUrl:"https://github.com/microsoft/TaskWeaver/tree/main/website/blog/role.md",source:"@site/blog/role.md",title:"Roles in TaskWeaver",description:'We frame TaskWeaver as a code-first agent framework. The term "code-first" means that the agent is designed to',date:"2024-10-23T07:32:58.000Z",tags:[],readingTime:4.81,hasTruncateMarker:!0,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:"Plugins In-Depth",permalink:"/TaskWeaver/blog/plugin"}},d={authorsImageUrls:[]},c=[];function l(e){const n={em:"em",mermaid:"mermaid",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["We frame TaskWeaver as a ",(0,a.jsx)(n.strong,{children:"code-first"})," agent framework. The term \"code-first\" means that the agent is designed to\nconvert the user's request into one or multiple runnable code snippets and then execute them to generate the response.\nThe philosophy behind this design is to consider programming languages as the de facto language for communication in cyber-physical systems,\njust like the natural language for human communication. Therefore, TaskWeaver translates the user's request in natural language into\nprogramming languages, which can be executed by the system to perform the desired tasks."]}),"\n",(0,a.jsxs)(n.p,{children:["Under this design, when the developer needs to extend the agent's capability, they can write a new plugin.\nA plugin is a piece of code wrapped in a class that can be called as a function by the agent in the generated code snippets.\nLet's consider an example: ",(0,a.jsx)(n.em,{children:"the agent is asked to load a CSV file and perform anomaly detection on the data"}),".\nThe workflow of the agent is in the diagram below. It is very natural to represent data to be processed in variables and this task in code snippets."]}),"\n",(0,a.jsx)(n.mermaid,{value:'flowchart TD\n    A[User] --"read a.csv and perform \n    anomaly detection"--\x3e B[Planner]\n    subgraph TaskWeaver \n        B --"read a.csv and call the \n        anomaly_detection plugin\n        to find anomalies in the data"--\x3e C[Code Generator]\n        subgraph Code Interpreter\n            C --"df=pd.read_csv(\'a.csv\')\n            anomaly_df=anomaly_detection(df)"--\x3e D[Code Executor]\n        end\n    end\n    D --result--\x3e B\n    B --response--\x3e A'})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var a=t(6540);const s={},r=a.createContext(s);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);