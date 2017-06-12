package com.gameday.domain;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

/**
 * Created by damianijr on 25/04/17.
 */
@Entity
@Data
@NoArgsConstructor
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;

    @Column(unique = true)
    String name;

    LocalDate foundation;
}
