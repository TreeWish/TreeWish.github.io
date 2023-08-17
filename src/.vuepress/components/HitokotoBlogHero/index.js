import { defineComponent, h, nextTick, onMounted, onUnmounted, ref, watch } from "vue"
import DropTransition from "@theme-hope/components/transitions/DropTransition"
import "./hitokoto-blog-hero.scss"
export default defineComponent({
  name: "HitokotoBlogHero",
  props: {
    /** Hero text */
    text: {
      type: String,
      required: true,
    },
    /** Hero image */
    image: { type: String, default: null },
    /** Hero image dark */
    imageDark: { type: String, default: null },
    /** Hero image alt */
    alt: { type: String, required: true },
    /** Hero image style */
    heroStyle: {
      type: [String, Object],
      default: null,
    },
  },
  setup(props) {
    const text = ref("")
    const display = ref("")
    const author = ref("")
    let isMounted = false
    const getHitokoto = () =>
      fetch("https://v1.hitokoto.cn/?&c=i")
        .then(res => res.json())
        .then(({ from, hitokoto }) => {
          text.value = hitokoto
          author.value = from
        })
    let currIndex = 0
    const presetList = [
      {
        hitokoto: "多年之后，那些不信命的男孩仍在遥望世界，只不过这一次，他们已经手握刀剑。",
        from: "龙族",
      },
      {
        hitokoto: "不自是，故彰；不自伐，故有功；不自矜，故长；夫唯不争，故天下莫能与之争！",
        from: "道德经",
      },
      {
        hitokoto: "空山无人，水流花开。万古长空，一朝风月。",
        from: "明朝那些事儿",
      },
      {
        hitokoto: "当时明月在，曾照彩云归。",
        from: "临江仙",
      },
    ]
    const getPresetText = () => {
      if (currIndex >= presetList.length - 1) {
        currIndex = 0
      } else {
        currIndex++
      }
      const { from, hitokoto } = presetList[currIndex]

      text.value = hitokoto
      author.value = from
    }
    onMounted(() => {
      isMounted = true
      watch(text, () => {
        display.value = ""
        let index = 0
        const renderNextWord = () => {
          display.value += text.value[index]
          index++
          return nextTick().then(() => {
            if (index < text.value.length)
              setTimeout(() => {
                void renderNextWord()
              }, 150)
            else if (isMounted)
              setTimeout(() => {
                // void getHitokoto()
                void getPresetText()
              }, 3000)
          })
        }
        void renderNextWord()
      })
      //   void getHitokoto()
      void getPresetText()
    })
    onUnmounted(() => {
      isMounted = false
    })
    return () => [
      h(DropTransition, { appear: true, type: "group", delay: 0.04 }, () => [
        props.image
          ? h("img", {
              key: "light",
              class: ["vp-blog-hero-image", { light: props.imageDark }],
              style: props.heroStyle,
              src: props.image,
              alt: props.alt,
            })
          : null,
        props.imageDark
          ? h("img", {
              key: "dark",
              class: "vp-blog-hero-image dark",
              style: props.heroStyle,
              src: props.imageDark,
              alt: props.alt,
            })
          : null,
      ]),
      h(DropTransition, { appear: true, delay: 0.08 }, () =>
        props.text ? h("h1", { class: "vp-blog-hero-title" }, props.text) : null
      ),
      h("div", { class: "hitokoto" }, [
        h("p", { class: "hitokoto-text" }, h("span", display.value)),
        h(
          "p",
          {
            class: "hitokoto-author",
            style: { opacity: display.value.length > 4 ? 1 : 0 },
          },
          `——「${author.value}」`
        ),
      ]),
    ]
  },
})
//# sourceMappingURL=HitokotoBlogHero.js.map
