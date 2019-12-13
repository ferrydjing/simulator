export default {
  data() {
    return {
      mixin_preBgColor: ''
    }
  },
  methods: {
    mixin_clickEffectHandle(e, type, bgColor) {
      e.stopPropagation()
      let node = e.target
      if (['span', 'img'].indexOf(e.target.nodeName.toLowerCase()) !== -1) {
        node = e.target.parentNode
      }
      if (type)
        switch (type) {
          case 'down':
            node.style.left = '1px'
            node.style.top = '1px'
            bgColor && (node.style.background = bgColor)
            break
          case 'up':
            node.style = ''
            break
        }
    }
  }
}
