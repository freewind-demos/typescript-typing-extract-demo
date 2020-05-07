type User = {
  aaa: string,
  1: string
}

function testStringKeys(keys: Extract<keyof User, string>) {
}

testStringKeys('aaa')

// compilation error
testStringKeys(1)
