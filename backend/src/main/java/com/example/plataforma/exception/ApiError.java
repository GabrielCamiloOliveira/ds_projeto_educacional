package com.example.plataforma.exception;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ApiError {

    // Erro na execução

    private Integer code;

    private String stats;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-mm-yyy hh:mm:ss")
    private LocalDateTime timestamp;

    private String message;

    private List<String> errors;
}
