import Home from "@/views/Home";

const routes = [
    {
        path: '/',
        name: '說明頁面',
        component: Home
    },
    {
        path: '/modal',
        name: '確認視窗',
        component: () => import('../../views/ModalView')
    },
    {
        path: '/jwt',
        name: 'Jwt',
        component: () => import('../../views/Jwt')
    },
    {
        path: '/transform-by-scroll',
        name: '滑動視窗時移動區塊',
        component: () => import('../../views/TransformByScrollView')
    },
    {
        path: '/await-call-back',
        name: '用promise包裝回傳callback',
        component: () => import('../../views/AwaitCallBackView')
    },
    {
        path: '/auto-complete',
        name: '自動完成組件',
        component: () => import('../../views/AutoCompleteView')
    }
]

export default routes