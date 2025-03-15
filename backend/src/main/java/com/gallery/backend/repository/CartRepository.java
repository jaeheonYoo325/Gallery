package com.gallery.backend.repository;

import com.gallery.backend.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CartRepository extends JpaRepository<Cart, Integer> {

    List<Cart> findbyMemberId(int memberId);
    Cart findByMemberIdAndItemId(int memberId, int itemId);
}
