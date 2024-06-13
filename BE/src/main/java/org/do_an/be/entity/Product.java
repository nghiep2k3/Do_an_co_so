package org.do_an.be.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;

@Getter
@Setter
@Entity
@Table(name = "product")
public class Product {
    @Id
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "name")
    private String name;

    @Lob
    @Column(name = "`desc`")
    private String desc;

    @Column(name = "SKU")
    private String sku;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private ProductCategory category;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "inventory_id")
    private ProductInventory inventory;

    @Column(name = "price")
    private Integer price;

    @Column(name = "discount_id")
    private Integer discountId;

    @Column(name = "created_at", nullable = false)
    private Instant createdAt;

    @Column(name = "modify_at", nullable = false)
    private Instant modifyAt;

    @Column(name = "delete_at", nullable = false)
    private Instant deleteAt;

}