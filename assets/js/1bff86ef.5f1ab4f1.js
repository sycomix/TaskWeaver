"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2317],{6486:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var a=n(4848),o=n(8453);const s={},i="How to evaluate a LLM agent?",r={permalink:"/TaskWeaver/blog/evaluation",editUrl:"https://github.com/microsoft/TaskWeaver/tree/main/website/blog/evaluation.md",source:"@site/blog/evaluation.md",title:"How to evaluate a LLM agent?",description:"The challenges",date:"2024-10-23T07:32:58.000Z",tags:[],readingTime:6.32,hasTruncateMarker:!0,authors:[],frontMatter:{},unlisted:!1,nextItem:{title:"Experience selection",permalink:"/TaskWeaver/blog/experience"}},h={authorsImageUrls:[]},d=[{value:"The challenges",id:"the-challenges",level:2},{value:"A new evaluation method",id:"a-new-evaluation-method",level:2},{value:"How to adapt for other agents?",id:"how-to-adapt-for-other-agents",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"the-challenges",children:"The challenges"}),"\n",(0,a.jsx)(t.p,{children:"It is nontrivial to evaluate the performance of a LLM agent.\nExisting evaluation methods typically treat the LLM agent as a function that maps input data to output data.\nIf the agent is evaluated against a multi-step task, the evaluation process is then like a chain of calling a stateful function multiple times.\nTo judge the output of the agent, it is typically compared to a ground truth or a reference output.\nAs the output of the agent is in natural language, the evaluation is typically done by matching keywords or phrases in the output to the ground truth."}),"\n",(0,a.jsx)(t.p,{children:"This evaluation method has its limitations due to its rigid nature.\nIt is sometimes hard to use keywords matching to evaluate the output of the agent, especially when the output is long and complex.\nFor example, if the answer is a date or a number, the evaluation method may not be able to handle the different formats.\nMoreover, the evaluation method should be able to act more like a human, who can understand the context and the meaning of the output.\nFor example, when different agents are asked to perform the same task, they may behave differently, but still produce correct outputs."}),"\n",(0,a.jsx)(t.p,{children:"The below example illustrates this point:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"Human: What is the weather today?\nAgent 1: It is sunny today in New York.\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"Human: What is the weather today?\nAgent 2: Do you want to know the weather in New York today?\nHuman: Yes.\nAgent 2: It is sunny today.\n"})}),"\n",(0,a.jsx)(t.p,{children:'Compared to Agent 1, Agent 2 asks for confirmation before providing the answer, which requires more interaction with the user.\nHowever, both agents provide the correct answer to the question.\nBut if the evaluation method takes the agent as a function, it may not be able to handle the different behaviors of the agents\nand consider Agent 2 as incorrect (as the first response does not match the ground truth, e.g., "sunny").'}),"\n",(0,a.jsx)(t.h2,{id:"a-new-evaluation-method",children:"A new evaluation method"}),"\n",(0,a.jsxs)(t.p,{children:["Therefore, we propose a new evaluation method that treats the agent as a conversational partner as shown in the figure below:\n",(0,a.jsx)(t.img,{alt:"Evaluation",src:n(6805).A+"",width:"965",height:"659"})]}),"\n",(0,a.jsxs)(t.p,{children:["We introduce two new roles during the evaluation process: the ",(0,a.jsx)(t.strong,{children:"Examiner"})," and the ",(0,a.jsx)(t.strong,{children:"Judge"}),".\nFor each test case, the task description is first given to the Examiner.\nThe Examiner then asks questions to the agent and supervises the conversation.\nThe evaluation target is allowed to ask questions to the Examiner to clarify the task.\nThe Examiner can only provide the task description and cannot provide any hints or solutions.\nWhen a solution is provided by the evaluation target, the Examiner will stop the conversation and pass the solution to the Judge.\nThe Judge will then evaluate the solution based on the ground truth.\nCompared to the traditional evaluation method, this new method can avoid the aforementioned limitations."]}),"\n",(0,a.jsx)(t.p,{children:'Let\'s see an example of how the new evaluation method works. The following YAML file is a task description for the task "Sum of 1 to 50".\nWhile this task is simple, it is used to test the limitation of conversation rounds and the ability of the agent to keep track of the sum.\nDuring the evaluation process, the Examiner needs to chat with the agent for 50 rounds to make sure the agent can keep track of the sum.\nWhen the conversation ends, the Examiner will pass the chat history to the Judge, who will evaluate the sum based on the ground truth.'}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"task_description: |-\n  The task has many rounds. The initial total sum is 0. \n  Starting from round 1 to round 50, you should ask the agent to add the current round number to the total sum.\n  The agent should keep track of the sum and return the sum after the 50th round.\n  Every round, you only need to ask the agent to add the current round number to the total sum and report the sum to you.\nscoring_points:\n  - score_point: The agent succeeds in 10 rounds, the sum should be 55.\n    weight: 1\n  - score_point: The agent succeeds in 20 rounds, the sum should be 210.\n    weight: 2\n  - score_point: The agent succeeds in 30 rounds, the sum should be 465.\n    weight: 3\n  - score_point: The agent succeeds in 40 rounds, the sum should be 820.\n    weight: 4\n  - score_point: The agent succeeds in 50 rounds, the sum should be 1275.\n    weight: 5\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The ground truth is represented by the ",(0,a.jsx)(t.code,{children:"scoring_points"})," field in the YAML file.\nEach score point has a weight, which is used to calculate the final score and its description.\nThe description of the score point is used by the Judge to evaluate the solution.\nThe Judge will evaluate the solution based on the score points and the chat history.\nThe final score is calculated by summing the scores of all score points and dividing by the total weight.\nTherefore, the normalized score is between 0 and 1."]}),"\n",(0,a.jsx)(t.p,{children:"In some cases, it may require a more precise way to evaluate the solution, e.g., with code.\nThis following task description is an example of such a case."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"task_description: |- \n  The task is to send 3 requests one-by-one and get the agent responses, no need to check the response content: \n  1. generate 1 random integer number and save it to a file named 'a.txt', just tell me if the task is done\n  2. tell me a random joke\n  3. save the previously generated random number to a file named 'b.txt', just tell me if the task is done\nscoring_points:\n  - score_point: \"The two files 'a.txt' and 'b.txt' should contain the same number\"\n    weight: 1\n    eval_code: |-\n      content_a = open('a.txt', 'r').read().strip()\n      content_b = open('b.txt', 'r').read().strip()\n      assert content_a == content_b, f\"content of a.txt: {content_a}, content of b.txt: {content_b}\"\n"})}),"\n",(0,a.jsxs)(t.p,{children:["We need to evaluate the solution based on the content of the files 'a.txt' and 'b.txt'.\nThe ",(0,a.jsx)(t.code,{children:"eval_code"})," field is used to write the evaluation code.\nYou can treat it as a normal test case in a unit test framework using the ",(0,a.jsx)(t.code,{children:"assert"})," statement.\nThe solution get the score point if the ",(0,a.jsx)(t.code,{children:"assert"})," statement does not raise an exception."]}),"\n",(0,a.jsx)(t.p,{children:"We provide additional fields in the YAML file to specify the evaluation environment."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"version: the version of the evaluation file\nconfig_var: configurations of the agent for this evaluation case\napp_dir: the working directory of the agent\ndependencies: list of packages required by the agent\ndata_files: list of files copied to the working directory\nmax_rounds: the maximum number of rounds for the conversation\n"})}),"\n",(0,a.jsxs)(t.p,{children:["We have implemented the new evaluation method in TaskWeaver and prepared a set of evaluation cases in the ",(0,a.jsx)(t.code,{children:"auto_eval/cases"})," directory.\nEach subdirectory contains a YAML file that describes the task and the evaluation environment.\nTo run the evaluation, you can find more details in the\n",(0,a.jsx)(t.a,{href:"https://github.com/microsoft/TaskWeaver/blob/main/auto_eval/README.md",children:"auto_eval/README.md"})," file."]}),"\n",(0,a.jsx)(t.h2,{id:"how-to-adapt-for-other-agents",children:"How to adapt for other agents?"}),"\n",(0,a.jsxs)(t.p,{children:["Although the new evaluation method is designed for TaskWeaver, it can be applied to other agents as well,\nas long as the agent can be treated as a conversational partner.\nMore specifically, the agent should be able to instantiate as a Python object with necessary configurations and a working directory\nas we did for TaskWeaver in ",(0,a.jsx)(t.code,{children:"auto_eval/taskweaver_eval.py"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'class TaskWeaverVirtualUser(VirtualUser):\n    def __init__(self, task_description: str, app_dir: str, config_var: Optional[dict] = None):\n        super().__init__(task_description)\n\n        self.app = TaskWeaverApp(app_dir=app_dir, config=config_var)\n        self.session = self.app.get_session()\n        self.session_id = self.session.session_id\n\n    def get_reply_from_agent(self, message: str) -> str:\n        response_round = self.session.send_message(\n            message,\n            event_handler=None,\n        )\n        assert response_round.state != "failed", "Failed to get response from agent."\n        return response_round.post_list[-1].message\n\n    def close(self):\n        self.app.stop()\n'})}),"\n",(0,a.jsxs)(t.p,{children:["To add another agent, you need to implement the ",(0,a.jsx)(t.code,{children:"VirtualUser"})," class and the ",(0,a.jsx)(t.code,{children:"get_reply_from_agent"}),", ",(0,a.jsx)(t.code,{children:"close"})," methods."]})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},6805:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/evaluation-ac91a46e949f383154a9ffbafcfbc981.png"},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var a=n(6540);const o={},s=a.createContext(o);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);