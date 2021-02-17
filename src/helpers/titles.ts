const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }

  return newArray
}

export default shuffleArray<string>([
  'System.out.println("mark farnum")', // Java
  'echo "mark farnum"', // bash
  'printf("mark farnum");', // C
  'std::cout << "mark farnum";', // C++
  'io:fwrite("mark farnum")', // Erlang
  'IO.puts "mark farnum"', // Elixir
  'console.log("mark farnum")', // JS
  '(print "mark farnum")', // Lisp
  'print "mark farnum"', // Perl
  'println!("mark farnum");', // Rust
])
