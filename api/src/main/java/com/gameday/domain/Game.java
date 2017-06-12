package com.gameday.domain;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

/**
 * Created by damianijr on 25/04/17.
 */
@Entity
@Data
@NoArgsConstructor
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;

    @Column(nullable = false)
    LocalDateTime time;


    @ManyToOne
    @JoinColumn(nullable = false)
    Team home;
    int homeScore;

    @ManyToOne
    @JoinColumn(nullable = false)
    Team away;
    int awayScore;
}
