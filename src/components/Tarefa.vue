<template>
    <Box>
        <div class="columns">
            <div class="column is-7">
                {{ tarefa.descricao || 'Tarefa sem Descrição' }}
            </div>
            <div class="column">
                <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos" />
            </div>
        </div>
    </Box>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import Cronometro from "@/components/Cronometro.vue";
import Box        from "@/components/Box.vue";
import ITarefa from "@/interfaces/ITarefa";

export default defineComponent({
    name: "Tarefa",
    props: {
        tarefa: {type: Object as PropType<ITarefa>, required: true}
    },
    components:{
        Cronometro,
        Box,
    }
})
</script>

