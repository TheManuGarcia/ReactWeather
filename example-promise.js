//
//
// function getTempPromise (location){
//     return new Promise(function(resolve, reject){
//        setTimeout(function(){
//            resolve(79);
//            reject('City not found');
//        }, 1000);
//     });
// }
//
// getTempPromise('Philadelphia').then(function (temp) {
//     console.log('promise success', temp);
// }, function (err) {
//     console.log('promise error', err);
// })

function addPromise(a,b){
    return new Promise(function (resolve,reject) {
        if(typeof a ==='number' && typeof b ==='number'){
            resolve(a+b);
        } else {
            reject('Bad solution');
        }
    });
}

addPromise(5,4).then (function (sum) {
    console.log('success', sum);
}, function (err) {
    console.log('error', err);
});

addPromise('andrew', 9).then(function(sum) {
    console.log('this hsould not show up');
}, function (err) {
    console.log('error', err);

});