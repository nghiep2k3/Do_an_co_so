package org.do_an.be.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;

@Getter
@Setter
@Entity
@Table(name = "product_category")
public class ProductCategory {
    @Id
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "name")
    private String name;

    @Lob
    @Column(name = "`desc`")
    private String desc;

    @Column(name = "created_at", nullable = false)
    private Instant createdAt;

    @Column(name = "modify_at", nullable = false)
    private Instant modifyAt;

    @Column(name = "delete_at", nullable = false)
    private Instant deleteAt;

}