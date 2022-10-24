Os métodos then e async/await funcionaram, mas a diferença entre eles está na escrita. Em termos de processamento e performance, elas são similares. A primeira opção tem uma escrita um pouco mais funcional, com encadeamento de funções uma abaixo da outra, enquanto a segunda faz com que escrevamos código assíncrono de uma maneira semelhante ao código síncrono.

Se tirarmos async da linha 11 do código e await da linha 14, a função será exatamente igual a uma função síncrona.



O Javascript (assim como muitas outras linguagens) utiliza o bloco try para envolver o trecho de código que pode gerar algum tipo de exceção e o bloco catch é o responsável por capturar a exceção (caso ocorra) e permitir que seja “tratada”, retornando alguma mensagem informativa, executando alguma função específica, etc