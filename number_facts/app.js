$FORM = $("#number-fact")
NUMBERSURL = "http://numbersapi.com/"
$FORM.on("submit", evt => {
    evt.preventDefault();
    num = $("#number").val();
    getNumberData(num);
})
function getNumberData(num) {
    if (!num) { return updateNumberData('') }
    res = axios.get(`${NUMBERSURL}${num}`);
    res
    .then(res => updateNumberData(res.data))
    .catch(err => {
        updateNumberData('')
        console.log(`ERROR ${err}`)
    })
}

function updateNumberData(data) {
    $("#fact").text(data)
}