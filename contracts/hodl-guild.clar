;; Title: STX HODL Guild Contract
;; Logic: Power = (Current Block - Join Block) * Balance

;; Error Codes
(define-constant ERR-NOT-AUTHORIZED (err u100))
(define-constant ERR-ALREADY-JOINED (err u101))
(define-constant ERR-NOT-A-MEMBER (err u102))

;; Data Maps
(define-map Members principal 
    { 
        join-block: uint, 
        initial-balance: uint 
    }
)

;; Public: Join the Guild
(define-public (join-guild)
    (let ((caller tx-sender))
        (asserts! (is-none (map-get? Members caller)) ERR-ALREADY-JOINED)
        (ok (map-set Members caller {
            join-block: block-height,
            initial-balance: (stx-get-balance caller)
        }))
    )
)

;; Read-Only: Calculate Voting Power
;; This is the "Magic" function that makes this dApp unique
(define-read-only (get-voting-power (member principal))
    (match (map-get? Members member)
        member-data (let (
            (duration (- block-height (get join-block member-data)))
            (current-balance (stx-get-balance member))
        )
        ;; The Formula: Time (blocks) * Balance / 1,000,000 (to keep numbers readable)
        (ok (* duration (/ current-balance u1000000))))
        (err ERR-NOT-A-MEMBER)
    )
)
