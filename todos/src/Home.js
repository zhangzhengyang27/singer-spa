import React, {useState, useEffect} from "react"

function useToolsModule() {
    const [toolsModule, setToolsModule] = useState()
    useEffect(() => {
        System.import("@study/tools").then(setToolsModule)
    }, [])
    return toolsModule
}

const Home = () => {
    const toolsModule = useToolsModule()
    useEffect(() => {
        let subjection = null
        if (toolsModule) {
            // 使用utility modules中的方法
            toolsModule.sayHello("@study/todos")
            subjection = toolsModule.sharedSubject.subscribe(console.log)
        }
        // 组件卸载时，清理
        return () => subjection.unsubscribe()
    }, [])

    return (
        <div>
            Home works{" "}
            {/* 发送广播消息*/}
            <button
                onClick={() => toolsModule.sharedSubject.next("Hello Hello Hello")}
            >
                button
            </button>
        </div>
    )
}

export default Home
