<template>
    <!-- Loader -->
    <v-dialog v-model="pageLoading" persistent fullscreen content-class="loading-dialog">
        <v-container fill-height>
            <v-layout row justify-center align-center>
                <!-- Spinner -->
                <semipolar-spinner
                        :animation-duration="2000"
                        :size="65"
                        color="#ff1d5e"
                />
            </v-layout>
        </v-container>
    </v-dialog>
    <!-- END Loader -->
</template>

<script>
import { SemipolarSpinner  } from 'epic-spinners'

export default {
  components: {
    SemipolarSpinner
  },
  name: 'AppLoader',
  data() {
    return {}
  },
  computed: {
    pageLoading: {
      get: function () {
        return this.$store.state.Layout.pageLoading;
      }
    },
  },
  methods: {},
  mounted() {
  },
  destroyed() {
  },
  created() {
  }
};
</script>

<!-- CSS deste componente -->
<style lang="less">
    .loading-dialog {
        background-color: lightgray;
        opacity: .9;
    }
</style>