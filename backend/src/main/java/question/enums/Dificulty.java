package question.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum Dificulty {

    FACIL(0),
    MEDIO(1),
    DIFICIL(2);

    private Integer value;
}