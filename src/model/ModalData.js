export class ModalData {
    constructor(value, title, body) {
        if (title) {
            this.title = title
        } else {
            this.title = '系統提示'
        }
        if (body) {
            this.body = body
        } else {
            this.body = '是否確認執行操作'
        }
        this.title = title
        this.name = body
        this.value = value;
    }
}