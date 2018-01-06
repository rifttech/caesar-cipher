class Caesar {
  constructor(shift) {
    this.ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this._shift = shift;
  }

  cipher(sequence) {
    return sequence.split(' ')
      .map((e) => {
      return e.split('')
        .map((x) => { return this.ABC.charAt((this.ABC.indexOf(x) + this._shift) % 26); })
        .join('');
    })
    .join(' ');

  }

  decipher(sequence){
    return sequence.split(' ')
            .map((e) => {
              return e.split('')
              .map((x) => { return this.ABC.charAt((this.ABC.indexOf(x) - this._shift + 26) % 26); })
              .join('');
            })
            .join(' ');
  }
}
module.exports = Caesar;
