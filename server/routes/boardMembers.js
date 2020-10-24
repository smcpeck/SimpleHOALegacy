const express = require("express");
const { models } = require("../database/index");

const router = new express.Router();

//* ****************************
// BOARD MEMBERS
//* ****************************

// Add a Board Member
router.post("/api/addBoardMember", (req, res) => {
    const { hoaId, position, accountId } = req.body;
    models.BoardMembers.create({
        accountId,
        hoaId,
        position,
    })
        .then((boardMember) => models.HomeOwners.update(
            {
                isBoardMember: 1,
            },
            {
                where: {
                    id: accountId,
                },
            },
        ).then(() => boardMember))
        .then((boardMember) => {
            res.status(201).send({
                isAdded: true,
            });
        })
        .catch((error) => {
            console.error(error);
        });
});

// Delete a Board Member
router.delete("/api/deleteBoardMember/:boardId/:homeOwnerId", (req, res) => {
    const { boardId, homeOwnerId } = req.params;
    models.BoardMembers.destroy({
        where: {
            id: boardId,
        },
    }).then(() => models.HomeOwners.update(
        {
            isBoardMember: 0,
        },
        {
            where: {
                id: homeOwnerId,
            },
        },
    )
        .then(() => res.send({
            isDeleted: true,
        }))
        .catch(() => res.send({
            isDeleted: false,
        })));
});

// Get ALL BoardMembers
router.get("/api/getBoardMembers/:hoaId", (req, res) => {
    const { hoaId } = req.params;
    models.BoardMembers.findAll({
        where: {
            hoaId,
        },
    })
        .then((boardmembers) => {
            const boardMembersDbData = boardmembers.map(
                (boardmember) => boardmember.dataValues,
            );
            const homeownersPromise = boardMembersDbData.map((boardmember) => models.HomeOwners.findOne({
                where: {
                    id: boardmember.accountId,
                },
            }));
            Promise.all(homeownersPromise).then((homeowners) => {
                const homeownersDbData = homeowners.map(
                    (homeowner) => homeowner.dataValues,
                );
                res.send(
                    boardMembersDbData.map((boardmember, i) => {
                        boardmember.homeOwner = homeownersDbData[i];
                        return boardmember;
                    }),
                );
            });
        })
        .catch((err) => {
            res.send(err);
        });
});

module.exports.boardRouter = router;
