export default function OrderMain({type, setType, typeData, setSize, size, sizeData, setMenu1, menuData, setMenu2, setSide, typeConfirmed, setTypeConfirmed, sizeConfirmed, setSizeConfirmed}) {

  return (
    <div>
      <h2>No More Pizza - Mokdong</h2>
      {
        !typeConfirmed &&
        <div className="stage">
          <h3>한판인지, 반반인지 선택해주세요.</h3>
            <div className="option_board">
            {
              typeData.map((each) => {
              return (
                <div 
                  key={each.id} 
                  value={each.type} 
                  className="option"
                  onClick={(e)=>setType(each.type)}                
                  style={{backgroundColor: type===each.type && "skyblue"}}
                >{each.type}</div>
                )
              })
            }
            </div>
            <button onClick={()=>setTypeConfirmed(true)}>다음</button>
        </div>
      }
      {
        typeConfirmed &&
        <div className="stage">
        <h3>사이즈를 선택해주세요.</h3>
        <div className="option_board">
            {
              sizeData.map((each) => {
              return (
                <div 
                  key={each.id} 
                  value={each.size} 
                  className="option"
                  onClick={(e)=>setSize(each.size)}                
                  style={{backgroundColor: size===each.size && "skyblue"}}
                >{each.size}</div>
                )
              })
            }
        </div>
        <button>다음</button>
      </div> 
      }

      <div>
        <h3>피자1의 종류를 선택해주세요.</h3>
        <select onChange={(e)=>setMenu1(e.target.value)}>
          {/* {menu[0]["type"][0]} */}
          {
            menuData.map((each) => {
            return (
              <option key={each.id} value={each.title}>{each.title}</option>
            )
          } )}
        </select>
      </div>
      
        { type === "반반" ? 
            <div>
            <h3>피자2의 종류를 선택해주세요.</h3>
            <select onChange={(e)=>setMenu2(e.target.value)}>
            {/* {menu[0]["type"][0]} */}
            {
              menuData.map((each) => {
              return (
                <option key={each.id} value={each.title}>{each.title}</option>
              )
            } )}
          </select>
          </div>
          :
          <div>
          ""
          </div>
        
        }   
        
        <div>
          <h3>토핑을 선택해주세요.</h3>
          <select>
            <option>----------</option>
            <option>통치즈크러스트</option>            
            <option>고구마엣지추가</option>
            <option>리치골드추가(고구마무스/체다치즈/통치즈)</option>
          </select>
        </div>                     
        <h3>사이드메뉴를 선택해주세요.</h3>
        <div>
          <select onChange={(e)=>setSide(e.target.value)}>
            <option>----------</option>
            <option>옥수수바질치즈크림뇨끼</option>
            <option>미트토마토파스타</option>
            <option>베이컨에멘탈크림파스타</option>
            <option>쉬림프로제파스타</option>
            <option>치즈오븐김치볶음밥</option>
            <option>마라로제파스타</option>
          </select>
        </div>             
        {/* <div>
          <input type="number" min="1" value={count} onChange={(e)=>{setCount(e.target.value.length > 0 && parseInt(e.target.value))}}></input>
        </div> */}
    </div>
    
  )
}