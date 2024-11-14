"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1500],{9155:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var t=s(4848),a=s(8453);const i={},o="Session",r={id:"concepts/session",title:"Session",description:"A session is a conversation instance that the user has with the TaskWeaver app.",source:"@site/docs/concepts/session.md",sourceDirName:"concepts",slug:"/concepts/session",permalink:"/TaskWeaver/docs/concepts/session",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/TaskWeaver/tree/main/website/docs/concepts/session.md",tags:[],version:"current",frontMatter:{},sidebar:"documentSidebar",previous:{title:"Project",permalink:"/TaskWeaver/docs/concepts/project"},next:{title:"Conversation",permalink:"/TaskWeaver/docs/concepts/conversation"}},c={},l=[];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",header:"header",img:"img",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"session",children:"Session"})}),"\n",(0,t.jsx)(n.p,{children:"A session is a conversation instance that the user has with the TaskWeaver app.\nA new session is created when the user interacts with the app.\nWhen the user finishes interacting with the app, the session should be closed.\nTaskWeaver allows multiple sessions to be created and managed by the app.\nTherefore, multiple users can interact with the app at the same time in different sessions."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"sessions",src:s(756).A+"",width:"3529",height:"1769"})}),"\n",(0,t.jsxs)(n.p,{children:["A new session is created by calling the ",(0,t.jsx)(n.code,{children:"get_session"})," method of the ",(0,t.jsx)(n.code,{children:"TaskWeaverApp"})," class.\nIn the background, the ",(0,t.jsx)(n.code,{children:"get_session"})," method creates a new ",(0,t.jsx)(n.code,{children:"Session"})," instance."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'class Session:\n    @inject\n    def __init__(\n        self,\n        session_id: str,\n        workspace: Workspace,\n        app_injector: Injector,\n        logger: TelemetryLogger,\n        tracing: Tracing,\n        config: AppSessionConfig,  \n        role_registry: RoleRegistry,\n    ) -> None:\n        """\n        Initialize the session.\n        :param session_id: The session ID.\n        :param workspace: The workspace.\n        :param app_injector: The app injector.\n        :param logger: The logger.\n        :param tracing: The tracing.\n        :param config: The configuration.\n        :param role_registry: The role registry.\n        """\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["In TaskWeaver, we use an ",(0,t.jsx)(n.code,{children:"injector"})," to take care of most dependency injection."]})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Session"})," class has the following methods:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'def send_message(\n    self,\n    message: str,\n    event_handler: Optional[SessionEventHandler] = None,\n    files: Optional[List[Dict[Literal["name", "path", "content"], Any]]] = None,\n) -> Round:\n    """\n    Send a message.\n    :param message: The message.\n    :param event_handler: The event handler.\n    :param files: The files.\n    :return: The chat round.\n    """\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"send_message"})," is used to send a message to the app.\nThe ",(0,t.jsx)(n.code,{children:"message"})," parameter is the text message that the user sends to the app.\nThe ",(0,t.jsx)(n.code,{children:"event_handler"})," parameter is a function that handles events during the conversation.\nWe have defined a variety of events that can be handled by the event handler.\nEach event has a specific type and a message.\nBy implementing the event handler, you can customize the display of events during the conversation.\nA very simple example of an event handler is shown below:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'class ConsoleEventHandler(SessionEventHandler):\n    def handle(self, event: TaskWeaverEvent):\n        print(event.t, event.msg)\n\nsession.send_message("Hello, how can I help you?", ConsoleEventHandler())\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"ConsoleEventHandler"})," class is a simple event handler that prints the event type and message to the console."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"files"})," parameter is used to upload files to the app for processing."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'def stop(self) -> None:\n    """\n    Stop the session.\n    This function must be called before the session exits.\n    """\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"stop"})," method is used to stop the session."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'def update_session_var(\n        self,\n        variables: Dict[str, str]\n):\n    """\n    Update the session variables.\n    :param variables: The variables to update.\n    """\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"update_session_var"})," method is used to update the session variables.\nA session variable is a key-value pair that is only available in a specific session.\nSession variables can be used in the plugins to store information that is specific to the session.\nFor example, you can store different user names in the session variables of different sessions.\nThen, in the plugin, you can access the user name by using the session variable."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'@register_plugin\nclass PluginClass(Plugin):\n\n    def __call__(self, argument1: str):\n        ...\n        # this line of code in the plugin implementation\n        self.ctx.get_session_var("user_name", "anonymous")\n        ...\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"update_session_var"})," method can be called multiple times to update multiple session variables."]})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},756:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/sessions-fa67e7939ff4d8e152e140d4682870b4.png"},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>r});var t=s(6540);const a={},i=t.createContext(a);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);