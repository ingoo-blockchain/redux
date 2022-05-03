function* gen(){
    console.log('1')
    yield 2
    console.log('2')
    yield 3
    console.log('3')
    yield 4
    return 5
}

const a = gen()

console.log( a.next() )
console.log( a.next() )
console.log( a.next() )
console.log( a.next() )


function* gen2(){
    while(true){
        yield 'loop'
    }
}

const b = gen2()

console.log(b.next())
console.log(b.next())
console.log(b.next())
console.log(b.next())