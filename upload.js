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
// const lay_top_right = document.createElement('div')
// lay_top_right.setAttribute('id','lay_top_right')
// lay_top.append(lay_top_right)

//
const title_bar = document.createElement('div')
title_bar.setAttribute('id','title_bar')
const title_bar_left = document.createElement('div')
title_bar_left.setAttribute('id','title_bar_left')
title_bar.append(title_bar_left)

//설문조사 제목
const title = document.createElement('div')
title.setAttribute('id','title')
const title_text = document.createElement('p')
title_text.setAttribute('id','title_text')
title_text.innerText = "설문조사 제목"
const title_input = document.createElement('input')
title_input.setAttribute('type','text')
title_input.setAttribute('id','title_input')
title.append(title_text)
title.append(title_input)

//
const dscr_bar = document.createElement('div')
dscr_bar.setAttribute('id','dscr_bar')
const dscr_bar_left = document.createElement('div')
dscr_bar_left.setAttribute('id','dscr_bar_left')
dscr_bar.append(dscr_bar_left)

//설명
const dscr = document.createElement('div')
dscr.setAttribute('id','dscr')
const dscr_text = document.createElement('p')
dscr_text.setAttribute('id','dscr_text')
dscr_text.innerText = "설명"
const dscr_input = document.createElement('textarea')
dscr_input.setAttribute('id','dscr_input')
dscr.append(dscr_text)
dscr.append(dscr_input)

//
const Q_area_bar = document.createElement('div')
Q_area_bar.setAttribute('id','Q_area_bar')  
const Q_area_bar_left = document.createElement('div')
Q_area_bar_left.setAttribute('id','Q_area_bar_left')
Q_area_bar.append(Q_area_bar_left)

//항목
const Q_area = document.createElement('div')
Q_area.setAttribute('id','Q_area')    
const Q_area_text = document.createElement('p')
Q_area_text.setAttribute('id','Q_area_text')    
Q_area_text.innerText="항목"
Q_area.append(Q_area_text)

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
//A_add.setAttribute('id','A_add_btn')
A_add.setAttribute('type','button')
A_add.setAttribute('value','추가')
A_add.setAttribute('onclick','add_opt()')

//저장버튼
// const confirm_div = document.createElement('div')
// confirm_div.setAttribute('id', 'confirm_div')
const confirm = document.createElement('input')

confirm.setAttribute('type','button')
confirm.setAttribute('value','저장')
confirm.setAttribute('onclick','')
// confirm_div.append('confirm')

content.append(lay_top)

reg_layout.append(title_bar)

reg_layout.append(title)
reg_layout.append(dscr_bar)
reg_layout.append(dscr)
reg_layout.append(Q_area_bar)
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
    A_in.setAttribute('class','bg-input-color rounded mb-1 mr-1')
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
reg_layout.setAttribute('class','h-248 w-264 bg-white px-8 pt-8 rounded-b-3xl')
lay_top.setAttribute('class','flex h-25 w-100% bg-O-primary rounded-tl-3xl rounded-tr-3xl')
lay_top_left.setAttribute('class','flex w-1/3 h-25 text-4xl justify-center font-semibold bg-main-color text-white rounded-tl-3xl px-8 py-6 items-center')
//lay_top_right.setAttribute('class','flex w-2/3 h-25 text-4xl justify-center font-semibold bg-main-color text-white rounded-tr-3xl px-8 py-6')
title_bar.setAttribute('class','w-2/15 h-3 bg-O-primary')
title_bar_left.setAttribute('class','w-1/3 h-3 bg-main-color')
title.setAttribute('class','h-1/5 flex flex-col')
title_text.setAttribute('class','flex font-semibold text-3xl py-2 items-center')
title_input.setAttribute('class','bg-input-color rounded w-1/2')
dscr_bar.setAttribute('class','w-2/15 h-3 bg-O-primary')
dscr_bar_left.setAttribute('class','w-1/3 h-3 bg-main-color')
dscr.setAttribute('class','h-1/5 flex flex-col')
dscr_text.setAttribute('class','flex font-semibold text-3xl py-2 items-center')
dscr_input.setAttribute('class','bg-input-color rounded w-1/2 h-25')
Q_area_bar.setAttribute('class','w-100% h-3 bg-O-primary')
Q_area_bar_left.setAttribute('class','w-1/3 h-3 bg-main-color')
Q_area.setAttribute('class','flex flex-col')
Q_area_text.setAttribute('class','flex font-semibold text-3xl py-2 items-center')
A_in_1.setAttribute('class','bg-input-color rounded mb-1')
A_in_2.setAttribute('class','bg-input-color rounded mb-1')
A_add.setAttribute('class','flex flex-col')
confirm.setAttribute('class','flex flex-col bg-blue-600 text-white hover:bg-blue-700 hover:text-gray-300 px-2 rounded-md w-20 h-10 items-center justify-center')


//pl-8 pr-8-25 pt-6-25 pb-6-5 //flex w-1/5 rounded-r-3xl justify-center items-center text-white text-3xl font-semibold bg-O-primary hover:bg-O-primary-dark hover:text-gray-300 cursor-pointer