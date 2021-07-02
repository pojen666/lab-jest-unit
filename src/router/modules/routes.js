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
    }
]

export default routes