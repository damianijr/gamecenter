package com.gameday.domain;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

/**
 * Created by damianijr on 25/04/17.
 */
@Data
@NoArgsConstructor
public class GameComment {
    @Id
    String id;
    Long gameId;
    String user;
    String comment;
    LocalDateTime dateTime;
}
