import {TipoNotificacao} from "@/interfaces/INotificacao";
import {NOTIFICAR} from "@/store/tipo-mutacoes";
import { store } from '@/store'
export const notificacaoMixin = {
    methods: {
        notificar(tipo: TipoNotificacao, titulo: string, texto: string) : void{
            /*const projeto = this.projetos.find((p) => p.id == this.id)
            if(!projeto){
                this.store.commit(NOTIFICAR, {
                    titulo: 'Ops!',
                    texto: "Selecione um projeto antes de finalizar a tarefa!",
                    tipo: TipoNotificacao.FALHA,
                });
                return;
            }else {*/
            store.commit(NOTIFICAR, {
                titulo,
                texto,
                tipo
            })

            // }
        }
    }
}