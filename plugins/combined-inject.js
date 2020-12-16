export default ({ app }, inject) => {
    inject('allInjectedFunction', string => console.log('That was easy!', string))
  }