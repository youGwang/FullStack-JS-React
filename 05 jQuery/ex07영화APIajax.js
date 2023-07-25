// ajax -> 비동기통신 방법
// j쿼리 접근$ - ajax메소드ajax()  - data:JSON형태{}

let moiveUrl = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230501`

const getAPI = () =>{
    $.ajax({
        //어느 데이터를 가져올 것인가
        url : moiveUrl,
        //어떤 방식으로 통신할 것인가 
        //(현재는 라이브 서버가 있으니 상관없음)
        type :'get',
        success : (response) => {
            // alert('통신 성공');
            // 순위 -> rank
            // 영화제목 -> movieNm
            // 개봉일 -> openDt

            let movieList = response.boxOfficeResult.dailyBoxOfficeList;
            // console.log(movieList[0].movieNm);
            // console.log(movieList[1].movieNm);
            // console.log(movieList[2].movieNm);
            for(let i=0;i<movieList.length;i++){
                console.log(movieList[i].rank,movieList[i].movieNm,movieList.openDt);
            }

            // 테이블 출력될 공간인 container에
            // 보내줄 코드를 누적해서 작성해준 다음
            // 마지막에 넣어주자!

            let tableForm = `
            <table border="line">
                <tr>
                    <th>순위</th>
                    <th>영화제목</th>
                    <th>개봉일</th>
                </tr>
            `;
            // tableForm += `
            //     <tr>
            //         <td>${movieList[0].rank}</td>
            //         <td>${movieList[0].movieNm}</td>
            //         <td>${movieList[0].openDt}</td>
            //     </tr>
            // `;
            for(let i of movieList){
                tableForm +=`
                    <tr>
                        <td>${i.rank}</td>
                        <td>${i.movieNm}</td>
                        <td>${i.openDt}</td>
                    </tr>
                `
            }

            tableForm +=`
            </table>
            `;
            $('.container').html(tableForm);
        },
        // 통신 실패 시 실행 로직
        error : () => {
            alert('통신 실패');
        }

    });
}