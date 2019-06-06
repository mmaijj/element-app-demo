const EVENT_SHOW = "show";
const EVENT_HIDE = "hide";

export default {
  data() {
    return {
      visible: false
    };
  },
  methods: {
    show() {
      this.$emit(EVENT_SHOW);
      this.visible = true;
    },
    hide() {
      this.$emit(EVENT_HIDE);
      this.visible = false;
    }
  }
};
