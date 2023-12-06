const root = document.getElementById('app')

//content
const content = document.createElement('div')
content.setAttribute('id','content')

//등록레이아웃
const reg_layout = document.createElement('div')
reg_layout.setAttribute('id','reg_layout')

//등록레이아웃_상단
const lay_top = document.createElement('div')
lay_top.setAttribute('id','lay_top')

//등록레이아웃_상단_좌측
const lay_top_left = document.createElement('div')
lay_top_left.setAttribute('id','lay_top_left')
lay_top_left.innerText = "설문조사 폼 양식"
lay_top.append(lay_top_left)

//등록레이아웃_상단_우측
const lay_top_right = document.createElement('div')
lay_top_right.setAttribute('id','lay_top_right')
lay_top_right.innerText = 'top right'
lay_top.append(lay_top_right)

//설문조사 제목
const title = document.createElement('div')
title.setAttribute('id','title')
title.innerText = "설문조사 제목"
const title_input = document.createElement('input')
title_input.setAttribute('type','text')
title_input.setAttribute('id','title_input')
title.append(title_input)

//설명
const dscr = document.createElement('div')
dscr.setAttribute('id','dscr')
dscr.innerText = "설명"
const dscr_input = document.createElement('textarea')
dscr_input.setAttribute('id','dscr_input')
dscr.append(dscr_input)

//항목
const Q_area = document.createElement('div')
Q_area.setAttribute('id','Q_area')    
Q_area.innerText="항목"

//항목 입력
const A_1 = document.createElement('div')
A_1.setAttribute('id', 'A_1')

const A_in_1 = document.createElement('input')
A_in_1.setAttribute('type', 'text')
A_in_1.setAttribute('id', 'A_in_1')
A_1.append(A_in_1)

const A_2 = document.createElement('div')
A_2.setAttribute('id', 'A_2')

const A_in_2 = document.createElement('input')
A_in_2.setAttribute('type', 'text')
A_in_2.setAttribute('id', 'A_in_2')
A_2.append(A_in_2)

const A_del_1 = document.createElement('input')
A_del_1.setAttribute('id', 'A_del_1')
A_del_1.setAttribute('type', 'button')
A_del_1.setAttribute('value', '삭제')
A_del_1.setAttribute('onclick', 'del_opt(this)')

Q_area.append(A_1)
Q_area.append(A_2)

const A_add = document.createElement('input')
A_add.setAttribute('type','button')
A_add.setAttribute('value','추가')
A_add.setAttribute('onclick','add_opt()')

//저장버튼
const confirm = document.createElement('input')
confirm.setAttribute('type','button')
confirm.setAttribute('value','저장')
confirm.setAttribute('onclick','')

reg_layout.append(lay_top)

reg_layout.append(title)

reg_layout.append(dscr)

reg_layout.append(Q_area)

reg_layout.append(A_add)

reg_layout.append(confirm)

content.append(reg_layout)

root.append(content)

//항목 삭제
function del_opt(del_btn){
    del_btn.parentNode.remove()
}

//항목 추가
let i=3
function add_opt(){

    const A = document.createElement('div')
    A.setAttribute('id', 'A_'+i)

    const A_in = document.createElement('input')
    A_in.setAttribute('type', 'text')
    A_in.setAttribute('id', 'A_in_'+i)
    A.append(A_in)

    const A_del = document.createElement('input')
    A_del.setAttribute('id', 'A_del_'+i)
    A_del.setAttribute('type', 'button')
    A_del.setAttribute('value', '삭제')
    A_del.setAttribute('onclick', 'del_opt(this)')
    A.append(A_del)
    Q_area.append(A)
    i++
}

//CSS
content.setAttribute('class','container bg-sub-color min-h-screen items-center py-6 px-33')
reg_layout.setAttribute('class','flex h-248 w-264 bg-white rounded-3xl')
lay_top.setAttribute('class','flex h-25 w-100%')
lay_top_left.setAttribute('class','w-1/3 h-25 text-4xl justify-center font-semibold bg-main-color text-white rounded-tl-3xl px-8 py-6')
lay_top_right.setAttribute('class','w-2/3 h-25 text-4xl justify-center font-semibold bg-main-color text-white rounded-tr-3xl px-8 py-6')
//pl-8 pr-8-25 pt-6-25 pb-6-5 //flex w-1/5 rounded-r-3xl justify-center items-center text-white text-3xl font-semibold bg-O-primary hover:bg-O-primary-dark hover:text-gray-300 cursor-pointer