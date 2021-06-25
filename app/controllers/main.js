// Đồng bộ
// DEMO ĐỒNG BỘ KHÔNG ĐÔNG BỘ VÀ PROMISE
// function readFile() {
//     return new Promise(function(resolve, reject){
//         setTimeout(function () {
//             console.log('Reading file....')
//             resolve ('File');
//         }, 3000)
//     })
// }

// function downloadFile (file){
//     console.log('Download' +  file)
// }

// function quangCao(){
//     console.log('Quảng cáo!')
// }

// readFile().then(function(file){
//     downloadFile(file);
// }).catch(function(err){
//     console.log(err)
// });
// quangCao()

var sanPhamServices = new SanPhamServices()

function getEle (id){
    return document.getElementById(id)
}
var layDanhSachSanPham = function (){
    sanPhamServices.layDSSP().then(function(result){
        //render table
        //result.data là mảng sp
        renderTable(result.data)
    }).catch(function(error){
        console.log(error)
    })
}

function renderTable(mangSP){
    var content = ''
    mangSP.map(function(sp, index){
        content += `
            <tr>
            <td>${index + 1}</td>
            <td>${sp.tenSP}</td>
            <td>${sp.gia}</td>
            <td>
            <img src"${sp.hinhAnh}"> 
            </td>
            <td>${sp.moTa}</td>
            <td>
                <button class="btn btn-danger">Xóa</button>
                <button class="btn btn-success">Xem</button>
            </td>
            </tr>
        `
    })
    getEle('tblDanhSachSP').innerHTML = content;
}