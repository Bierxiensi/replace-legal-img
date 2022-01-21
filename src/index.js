const checkUrlList = [
    "https://d-dev.zhgcloud.com/image/2021/6/2/60b75680287c1.png",
    "https://d-dev.zhgcloud.com/image/2021/6/2/60b73e58b38d0.jpg",
    "https://d-dev.zhgcloud.com/image/2021/6/2/60b75758164c6.png",
    "https://d-dev.zhgcloud.com/image/2021/6/2/60b752cd01b1c.png",
    "https://webpack.docschina.org/site-logo.1fcab817090e78435061.svg"
]
for(let i = 0; i < 5; i++){
    console.log(i);
    var img = document.createElement('img');
    img.setAttribute('src',checkUrlList[i]);
    document.getElementById('body').appendChild(img);
}
console.log('webpack-test')


