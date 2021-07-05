async function work() {
  return await Promise.resolve('promise is working')
}

work().then(console.log)
