package org.do_an.be.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.Instant;

@Getter
@Setter
@Entity
@Table(name = "order_details")
public class OrderDetail {
    @Id
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "user_id")
    private String userId;

    @Column(name = "total", precision = 10)
    private BigDecimal total;

    @Column(name = "payment_id")
    private Integer paymentId;

    @Column(name = "modify_at", nullable = false)
    private Instant modifyAt;

    @Column(name = "delete_at", nullable = false)
    private Instant deleteAt;

}