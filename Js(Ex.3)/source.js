function ajax(url, cb) {
  //fake ajax response:
  cb({
    foo: 2, //need
    bazz: [6, 8, 10], //need
    bam: {
      qux: 12, //need
    },
  });
}
function cheak(data) {
  console.log(
    56 ===
      data.foo +
        data.bar +
        data.bazz[0] +
        data.bazz[1] +
        data.bazz[2] +
        data.bam.qux +
        data.bam.qam
  );
}
var defults = {
  foo: 0,
  bar: 4, //need
  bam: {
    qux: 0,
    qam: 14, //need
  },
};

function response(
  {
    foo = defults.foo,
    bar = defults.bar,
    bazz,
    bam: { qux = defults.bam.qux, qam = defults.bam.qam } = {}, //זה מה שכבר הוגדר בכל מה שהוא לא דיפולטיבי
  } = {} //זה מה שכבר הוגדר בכל מה שהוא לא דיפולטיבי
) {
  cheak({ foo, bar, bazz, bam: { qux, qam } });
}
ajax("http://fun.tld", response);
