<template>
    <div class="box formulario">
        <div class="columns">
            <div class="column is-5" role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input
                    type="text"
                    class="input"
                    v-model="descricao"
                    placeholder="Qual tarefa você deseja iniciar">
            </div>

            <div class="column is-3">
                <div class="select">
                    <select v-model="idProjeto">
                        <option value="">Selecione o projeto</option>
                        <option
                            v-for="projeto in projetos"
                            :key="projeto.id"
                            :value="projeto.id"
                        >
                            {{ projeto.nome }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="column">
                <Temporizador @aoTemporizadorFinalizado="finalizarTarefa" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue";
import Temporizador from "@/components/Temporizador.vue";
import {useStore} from "vuex";
import {key} from "@/store";

export default defineComponent({
    name: 'Formulario',
    emits: ['aoSalvarTarefa'],
    setup(){
        const store = useStore(key)
        return{
            projetos: computed(() => store.state.projetos)
        }
    },
    data(){
        return{
            descricao: '',
            idProjeto: '',
        }
    },
    components:{
        Temporizador,
    },
    methods:{
        finalizarTarefa(tempoDecorrido : number) : void {
           this.$emit('aoSalvarTarefa', {
               duracaoEmSegundos: tempoDecorrido,
               descricao: this.descricao,
               projeto: this.projetos.find(proj => proj.id == this.idProjeto)
           })
            this.descricao = ''
        }
    }
})
</script>

<style>
.formulario{
    color: var(--texto-primario);
    background: var(--bg-primario);
}
</style>