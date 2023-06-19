# [M1S05] Ex 9 - Conceito do GitFlow

> Explique com suas palavras, o conceito do GitFlow e como ele é utilizado no controle de versão de um projeto.


GitFlow: A dança das Branches no Desenvolvimento de Software com Controle de Versão utilizando o Git

O desenvolvimento de software em equipe requer uma gestão eficiente do controle de versão para garantir a colaboração e a integração harmoniosa das alterações realizadas por diferentes desenvolvedores. Nesse contexto, o Git tem se destacado como uma ferramenta popular para o controle de versão devido à sua flexibilidade e recursos avançados. No entanto, lidar com branches e fluxos de trabalho complexos pode se tornar um desafio para equipes maiores ou projetos mais complexos.

O GitFlow surge como uma metodologia que visa simplificar o gerenciamento do fluxo de trabalho com o Git, fornecendo uma estrutura clara e regras bem definidas para o uso de branches. Essa metodologia estabelece um conjunto de práticas e convenções que permitem uma melhor organização e rastreabilidade das alterações realizadas no código-fonte, além de facilitar a colaboração entre os membros da equipe.

Se destacam os pontos:

Criação de branches:

Branch develop: É a branch principal do projeto, onde o desenvolvimento ocorre.

Branch master: Representa a versão de produção estável do software.

Branches de feature: São criadas a partir da develop e destinadas ao desenvolvimento de novas funcionalidades.


Criação da branch de feature: 

A partir da branch develop, cria-se uma nova branch para desenvolver uma funcionalidade específica.

Desenvolvimento e commits: Os desenvolvedores trabalham na branch da feature, fazendo commits regulares.

Testes e revisões: Uma vez concluída a funcionalidade, são realizados testes e revisões antes de prosseguir.

Integração de features:

Pull Request: A feature é mesclada de volta para a branch develop através de um pull request.

Revisão de código: Outros membros da equipe revisam o código, fornecem feedback e fazem ajustes, se necessário.

Mesclagem: Após a revisão, a feature é mesclada na branch develop.


Lançamento de versões:

Preparação da versão: Quando um conjunto de funcionalidades estiver pronto para ser lançado, uma nova versão é preparada.

Criação da branch release: A partir da branch develop, cria-se uma nova branch para preparar a versão.

Testes e correções: São realizados testes adicionais e correções de bugs na branch release.

Mesclagem com master: Após a validação, a branch release é mesclada na master para realizar o lançamento.


Correção de bugs:

Criação da branch hotfix: A partir da branch master, cria-se uma nova branch para correção de bugs em produção.

Correção do bug: A equipe trabalha na branch hotfix para corrigir o problema identificado.

Mesclagem: Após a correção, a branch hotfix é mesclada tanto na master quanto na develop.