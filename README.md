# ordersystem

![wireframe](https://user-images.githubusercontent.com/62843726/87382982-43885180-c5d3-11ea-9efa-7c77ee14cf68.png)

### 컨셉

- 대만 우롱차 브랜드 경성우가 런던에 티샵을 개설했다는 가정하에, POS 시스템을 만든다.
- 브랜드 아이덴티티 및 제품사진 등의 asset은 기존 경성우 브랜드 홈페이지에서 차용한다. ([https://www.jsy-tea.com/categories/loose-tea](https://www.jsy-tea.com/categories/loose-tea))
- 그 중 총 3개의 탭의 데이터만 가져와서 만든다 : gift box, loose tea, tea bag
- 통화는 파운드를 쓰고, 소수점 둘째자리까지 표시한다. (£ 13.00)

### 메뉴

아이템 클릭시 “메뉴 이름” 및 “가격”이 우측 계산서에 반영된다. ( 이 과정에서 빈 리스트에도 담을 것 )

### 계산서 리스트

- 휴지통 아이콘 : 눌렀을때 주문상품 전체를 삭제한다 (+ 리스트 전체 초기화)
- 메뉴에서 클릭한 데이터가 반영되는 영역
    - 수량: 클릭시 드롭다운 메뉴로 수량을 변경할 수 있게 한다
    - x 버튼: 해당 아이템만 삭제한다
- Total: 아이템의 가격 합계를 도출해서 반환한다
    - 주문 수량이 변경될 때마다 합계가 자동으로 변환된다.
