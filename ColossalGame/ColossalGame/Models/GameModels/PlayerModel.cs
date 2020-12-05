﻿using tainicom.Aether.Physics2D.Dynamics;

namespace ColossalGame.Models.GameModels
{
    public class PlayerModel : GameObjectModel
    {
        public float Health { get; set; } = 100f;
        public string Username { get; set; }

        public PlayerModel(Body b) : base(b)
        {
        }

        public new PlayerExportModel Export()
        {
            var retVal = new PlayerExportModel {XPos = this.XPos, YPos = this.YPos, Username = this.Username};
            return retVal;
        }
    }
}
