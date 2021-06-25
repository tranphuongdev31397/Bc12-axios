function SanPhamServices() {
    this.layDSSP = function () {
        //GET lấy dữ liệu từ server
        // axios trả về 1 promise
        return axios({
            url: 'https://60d5dbf8943aa60017768c52.mockapi.io/products',
            method: 'GET'
        });

    }
}