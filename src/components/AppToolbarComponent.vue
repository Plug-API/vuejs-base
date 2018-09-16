<template>
    <!-- Toolbar -->
    <v-toolbar
            app
            :clipped-left="clipped"
    >
        <v-btn icon @click.stop="menuMiniToggle">
            <v-icon v-html="mini ? 'chevron_right' : 'chevron_left'"></v-icon>
        </v-btn>
        <v-toolbar-title v-text="title"></v-toolbar-title>
        <v-spacer></v-spacer>
    </v-toolbar>
    <!-- END Toolbar -->
</template>

<script>
export default {
  name: 'AppToolbar',
  data() {
    return {
      clipped: false,
      title: "Toolbar Vuetify.js"
    }
  },
  computed: {
    drawer: {
      get: function () {
        return this.$store.state.Layout.menuDisplay;
      },
      set: function (val) {
        this.$store.dispatch('menuDisplaySetAction', val).then(() => {
          return this.$store.state.Layout.menuDisplay;
        })
      }
    },
    mini: {
      get: function () {
        return this.$store.state.Layout.menuMini;
      },
      set: function (val) {
        this.$store.dispatch('layoutMenuMiniSetAction', val).then(() => {
          return this.$store.state.Layout.menuMini;
        })
      }
    }
  },
  methods: {
    menuMiniToggle() {
      let mini = !this.mini;

      this.$store.dispatch('layoutMenuMiniSetAction', mini).then(() => {
        mini = this.$store.state.Layout.menuMini;
      });
    }
  },
  mounted() {
  },
  destroyed() {
  },
  created() {
  },
}
</script>