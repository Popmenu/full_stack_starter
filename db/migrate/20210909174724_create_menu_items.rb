class CreateMenuItems < ActiveRecord::Migration[6.1]
  def change
    create_table :menu_items do |t|
      t.string :name
      t.string :description
      t.float :price
      t.string :image_url

      t.timestamps
    end
  end
end
