const toastTrigger = document.getElementById('toastBtn')
const toastLiveExample = document.getElementById('toast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}