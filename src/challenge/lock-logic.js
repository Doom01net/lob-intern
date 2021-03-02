const redirect = window.redirect

const SECRET_COMBO = [1, 3, 5, 1]

const lockState = window.mobx.observable({
  locked: true,
  wheels: [0, 0, 0, 0]
})

function arrayEqual (a, b) {
  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false
  }
  return true
}
function changeDialValue (index, incrementBy) {
  for (let i = 0; i < lockState.wheels.length; i++) {
    if (i == index) {
      if (lockState.wheels[i] == 0 && (incrementBy < 0)) {
        lockState.wheels[i] = 9
      } else if (lockState.wheels[i] == 9 && (incrementBy > 0)) {
        lockState.wheels[i] = 0
      } else {
        lockState.wheels[i] += incrementBy
      }
    }
  }

  if (arrayEqual(SECRET_COMBO, lockState.wheels)) {
    lockState.locked = false
  }

  redirect('bogdan')
  
}

// let our other modules find our functions
window.lockState = lockState
window.changeDialValue = changeDialValue
