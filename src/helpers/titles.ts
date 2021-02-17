const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }

  return newArray
}

export default (text: string): string[] =>
  shuffleArray<string>([
    `System.out.println("${text}")`, // Java
    `echo "${text}"`, // bash
    `printf("${text}");`, // C
    `std::cout << "${text}";`, // C++
    `io:fwrite("${text}")`, // Erlang
    `IO.puts "${text}"`, // Elixir
    `console.log("${text}")`, // JS
    `(print "${text}")`, // Lisp
    `print "${text}"`, // Perl
    `println!("${text}");`, // Rust
  ])
