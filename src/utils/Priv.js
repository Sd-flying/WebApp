const Privilege = function (obj) {
  if (typeof obj === 'string') {
    obj = JSON.parse(obj)
  }
  this.Data = obj
}

Privilege.prototype.hasPriv = function (k) {
  if (!k) {
    return false
  }
  const index = k.lastIndexOf('.')
  if (index > 0) {
    const id = k.substring(index + 1)
    if (typeof id === 'number') {
      k = k.substring(0, index)
      const flags = this.Data.ids[id]
      if (flags == null) {
        return false
      }
      const order = this.Data.types[k]
      if ((order !== 0 && !order) || order >= flags.length * 6) {
        return false
      }
      const flag = flags.charCodeAt(order / 6)
      return (Priv.charToFlag(flag) & (1 << (5 - (order % 6)))) !== 0
    } else {
      return this.Data.keys[k]
    }
  } else {
    return this.Data.keys[k]
  }
}

const Priv = {
  Instance: {}
}

Priv.init = function (privString) {
  if (!privString) {
    return
  }

  let privJson = JSON.parse(privString)

  Priv.Instance = new Privilege(privJson)
}

Priv.charToFlag = function (flag) {
  let i = 0
  if (flag === 36 || flag === 37) {
    i = flag
  } else if (flag < 58) {
    i = flag - 48
  } else if (flag < 91) {
    i = flag - 27
  } else if (flag < 123) {
    i = flag - 87
  }
  return i
}

Priv.hasPriv = function (privID) {
  let arr = privID.split('||')
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) {
      continue
    }
    var item = arr[i]

    if (Priv.Instance.hasPriv(item)) {
      return true
    }
  }
  return false
}

export {Priv}
